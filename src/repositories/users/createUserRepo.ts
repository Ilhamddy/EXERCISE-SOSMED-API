import prisma from "../../helper/prisma";
import { IUser } from "../../types/user.type";

export const createUserRepo = async (data: IUser) => {
  try {
    const { email, username, password } = data;
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
