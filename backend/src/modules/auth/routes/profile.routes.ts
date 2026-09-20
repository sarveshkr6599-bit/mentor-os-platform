import { Router } from "express";
import { authMiddleware } from "../../../shared/middleware/auth.middleware";

const router = Router();

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    return res.json({
      success: true,
      user: (req as any).user,
    });
  }
);

export default router;