import pool from "../../../database/db";
import { AuthUser } from "../types/auth.types";

export class AuthRepository {
  async findByEmail(email: string): Promise<AuthUser | null> {
    const result = await pool.query(
      `
      SELECT id, email, role, password_hash
      FROM users
      WHERE email = $1
      LIMIT 1
      `,
      [email]
    );

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0] as AuthUser;
  }

  async createUser(
    name: string,
    email: string,
    passwordHash: string,
    role: "student" | "mentor" | "admin"
  ): Promise<AuthUser> {
    const result = await pool.query(
      `
      INSERT INTO users (name, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, role, password_hash
      `,
      [name, email, passwordHash, role]
    );

    return result.rows[0] as AuthUser;
  }
}