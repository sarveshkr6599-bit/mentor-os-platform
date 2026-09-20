export interface AuthUser {
  id: string;
  email: string;
  role: "student" | "mentor" | "admin";
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}