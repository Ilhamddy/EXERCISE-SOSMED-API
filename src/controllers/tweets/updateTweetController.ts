import { NextFunction, Request, Response } from "express";
import { updateTweetAction } from "../../actions/tweets/updateTweetActions";

export const updateTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    // const updateFields = req.body;
    const result = await updateTweetAction(id, req.body);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
