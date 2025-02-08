import { Request, Response } from "express";
import { asyncErrorHandler } from "../lib/utils";
import { tradeTable } from "../db/schema/trade";
import { db } from "../db/drizzle";
import { createTradeValidator } from "../lib/validators";
import { eq } from "drizzle-orm";
import { ApiError } from "../middleware/errorHandler";
import { courseTable } from "../db/schema/course";

export const getTrades = asyncErrorHandler(
  async (request: Request, response: Response) => {
    const trades = await db.query.tradeTable.findMany({
      with: {
        course: true,
        user: true,
        future: true,
      },
    });
    response.status(200).json(trades);
  }
);

export const createTrade = asyncErrorHandler(
  async (request: Request, response: Response) => {
    const createBody = createTradeValidator.parse(request.body);

    const existingCourse = await db.query.courseTable.findFirst({
      where: eq(courseTable.id, createBody.courseId),
    });

    const existingFutureCourse = await db.query.courseTable.findFirst({
        where: eq(courseTable.id, createBody.futureId),
        });
    
    if(!existingCourse || !existingFutureCourse) throw new ApiError("Course does not exist", 404);

    const newTrade = await db
      .insert(tradeTable)
      .values({
        courseId: createBody.courseId,
        futureId: createBody.futureId,
        userId: 1,
        reason: createBody.reason,
      })
      .returning();

    response.status(200).json(newTrade);
  }
);
