import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../../actions/tweets/deleteTweetActions";

export const deleteTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await deleteTweetAction(Number(id));
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
