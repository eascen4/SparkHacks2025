import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { createTrade, getTrades } from "../controllers/tradeController";

const tradeRouter = Router();

tradeRouter.get("/", getTrades);
tradeRouter.post("/",  createTrade);

export { tradeRouter };