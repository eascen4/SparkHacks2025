import { RequestHandler, Request, Response } from "express";

export const getCourses: RequestHandler = async (req, res) => {
  res.status(200).json({message: "Hello from the server!"});
};

export const getCourse: RequestHandler = async (req, res) => {
}


