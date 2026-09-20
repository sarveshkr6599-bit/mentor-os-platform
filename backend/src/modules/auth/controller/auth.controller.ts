import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {
  private authService =
    new AuthService();

  login = (
    req: Request,
    res: Response
  ) => {
    const { email } = req.body;

    const user =
      this.authService.login(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.json({
      success: true,
      data: user,
    });
  };
}