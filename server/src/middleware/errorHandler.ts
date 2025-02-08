import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public errors?: any[]
  ) {
    super(message);
    this.name = "ApiError";
    Error.captureStackTrace(this, this.constructor);
  }
}

const zodError = (error: ZodError) => {
  const newError = error.errors[0];

  return {
    message: newError.message,
    field: newError.path.join("."),
    details: error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
      code: err.code,
    })),
  };
};

export const errorHandler = (
  err: Error | ApiError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", {
    name: err.name,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });

  if (err instanceof ZodError) {
    const formattedError = zodError(err);
    return res.status(400).json({
      status: "error",
      message: formattedError.message,
      field: formattedError.field,
      details:
        process.env.NODE_ENV === "development"
          ? formattedError.details
          : undefined,
    });
  }

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      status: "error",
      message: err.message,
      errors: err.errors,
    });
  }

  return res.status(500).json({
    status: "error",
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
};
