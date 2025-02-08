import { Request, Response } from "express";
import { asyncErrorHandler } from "../lib/utils";

export const getMe = asyncErrorHandler(
  async (request: Request, response: Response) => {
    const user = request.user;

    return response
      .status(200)
      .json({ username: user.username, email: user.email, id: user.id });
  }
);
