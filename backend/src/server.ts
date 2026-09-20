import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/routes/auth.routes";
import profileRoutes from "./modules/auth/routes/profile.routes";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (_req, res) => {
  res.send("MentorOS Backend Running");
});

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Backend Connected",
  });
});

app.use("/auth", authRoutes);
app.use(profileRoutes);

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});