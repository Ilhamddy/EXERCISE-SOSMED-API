import { comparePassword } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
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

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return {
        status: 400,
        return: "Invalid Password Credential",
      };
    }

    const dataWithoutPassword = await excludeFields(user, ["password"]);

    return {
      status: 200,
      message: "login succes!",
      data: dataWithoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
