import { Request, Response, NextFunction } from "express";

// This function is used to handle errors that occur in async functions
export const asyncErrorHandler = (
  routeHandler: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<any>
) => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await routeHandler(request, response, next);
    } catch (error) {
      next(error);
    }
  };
};