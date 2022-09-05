import express from "express";
import UserRouter from "../modules/user/user.router";

const router = express.Router();

/// Healtcheck
router.get("/", (_req, res) => {
  return res.status(200).json({ health: true });
});

/// User routes
router.use("/user", UserRouter);

export default router;
