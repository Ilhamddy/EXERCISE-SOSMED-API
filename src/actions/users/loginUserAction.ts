import { findUsersByEmail } from "../../repositories/users/findEmailByEmail";
import { findUsersByUsername } from "../../repositories/users/findUserByUsername";
import { IUser } from "../../types/user.type";

export const loginUserAction = async (
  usernameOrEmail: string,
  password: string
) => {
  try {
    let user;
    if (usernameOrEmail.includes("@")) {
      user = await findUsersByUsername(usernameOrEmail);
    } else {
      user = await findUsersByEmail(usernameOrEmail);
    }

    if (!user) {
      return {
        status: 404,
        message: "account not found",
      };
    }

    if (user.isDeleted) {
      return {
        status: 400,
        message: "account deleted",
      };
    }

    if (user.password !== password) {
      return {
        status: 400,
        return: "Invalid Password Credential",
      };
    }

    return {
      status: 200,
      message: "login succes!",
      data: usernameOrEmail,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
