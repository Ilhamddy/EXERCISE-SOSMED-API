import { NextFunction, Request, Response } from "express";
import { getTweetsAction } from "../../actions/tweets/getTweetsActions";

export const getTweetsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getTweetsAction();
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
