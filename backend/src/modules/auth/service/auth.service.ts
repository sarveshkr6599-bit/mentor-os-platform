import { AuthRepository } from "../repository/auth.repository";
import { generateToken } from "../../../shared/auth/jwt";

export class AuthService {
  private authRepository =
    new AuthRepository();

  login(email: string) {
    const user =
      this.authRepository.findByEmail(
        email
      );

    if (!user) {
      return null;
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      user,
      token,
    };
  }
}