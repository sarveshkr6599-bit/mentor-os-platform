import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {
  private authService = new AuthService();

  // LOGIN
  login = async (
    req: Request,
    res: Response
  ) => {
    const { email, password } = req.body;

    const user = await this.authService.login(
      email,
      password
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    return res.json({
      success: true,
      data: user,
    });
  };

  // REGISTER
  register = async (
    req: Request,
    res: Response
  ) => {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    const user = await this.authService.register(
      name,
      email,
      password,
      role
    );

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    return res.status(201).json({
      success: true,
      data: user,
    });
  };
}