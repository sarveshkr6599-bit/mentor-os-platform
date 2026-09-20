import { AuthUser } from "../types/auth.types";

export class AuthRepository {
  private users: AuthUser[] = [
    {
      id: "1",
      email: "student@test.com",
      role: "student",
    },
    {
      id: "2",
      email: "mentor@test.com",
      role: "mentor",
    },
    {
      id: "3",
      email: "admin@test.com",
      role: "admin",
    },
  ];

  findByEmail(email: string) {
    return this.users.find(
      (user) => user.email === email
    );
  }
}