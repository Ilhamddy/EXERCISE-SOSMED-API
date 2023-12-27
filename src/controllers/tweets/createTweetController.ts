import { NextFunction, Request, Response } from "express";
import { createTweetAction } from "../../actions/tweets/createTweetActions";

export const createTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const addResult = await createTweetAction(data);

    res.status(addResult.status).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
