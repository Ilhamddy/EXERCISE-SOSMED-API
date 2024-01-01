import { NextFunction, Request, Response } from "express";
import { getTweetByUserAction } from "../../actions/tweets/getTweetByUserAction";

export const getTweetByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await getTweetByUserAction(Number(id));
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
