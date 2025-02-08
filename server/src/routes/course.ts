import { Router } from "express";
import { getCourses } from "../controllers/courseController";
import { requireAuth } from "../middleware/auth";

const courseRouter = Router();

courseRouter.get("/", requireAuth, getCourses);

export { courseRouter };
