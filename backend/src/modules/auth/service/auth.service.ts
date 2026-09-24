import bcrypt from "bcryptjs";
import { AuthRepository } from "../repository/auth.repository";
import { generateToken } from "../../../shared/auth/jwt";

export class AuthService {
  private authRepository = new AuthRepository();

  // LOGIN
  async login(email: string, password: string) {
    const user = await this.authRepository.findByEmail(email);

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isPasswordValid) {
      return null;
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }

  // REGISTER
  async register(
    name: string,
    email: string,
    password: string,
    role: "student" | "mentor" | "admin"
  ) {
    // Check if user already exists
    const existingUser =
      await this.authRepository.findByEmail(email);

    if (existingUser) {
      return null;
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user in database
    const user = await this.authRepository.createUser(
      name,
      email,
      passwordHash,
      role
    );

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }
}