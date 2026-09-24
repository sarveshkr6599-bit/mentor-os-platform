export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  role: "student" | "mentor" | "admin";
}