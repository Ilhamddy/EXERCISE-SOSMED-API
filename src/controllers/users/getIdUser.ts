import { NextFunction, Request, Response } from "express";
import { keepLoginAction } from "../../actions/users/keepLoginAction";

export const getIdUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await keepLoginAction(Number(id));
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
