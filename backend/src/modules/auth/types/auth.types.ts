export interface AuthUser {
  id: string;
  email: string;
  role: "student" | "mentor" | "admin";
  password_hash: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}