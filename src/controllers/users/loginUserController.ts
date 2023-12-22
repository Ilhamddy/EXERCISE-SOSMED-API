import { NextFunction, Request, Response } from "express";
import { registerUserAction } from "../../actions/users/registerUserAction";
import { loginUserAction } from "../../actions/users/loginUserAction";

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const result = await loginUserAction(usernameOrEmail, password);
    // const result = await registerUserAction(data);
    // console.log(result);
    res.status(result.status).send(result);

    // res.status(200).send("login");
  } catch (error) {
    next(error);
  }
};
