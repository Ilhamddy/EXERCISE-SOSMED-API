import { NextFunction, Request, Response } from "express";
import { registerUserAction } from "../../actions/users/registerUserAction";

export const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await registerUserAction(data);
    // console.log(result);

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
