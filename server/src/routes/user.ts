import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { getMe } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/me", requireAuth, getMe);

export { userRouter };
