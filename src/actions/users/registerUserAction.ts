
import { hashPassword } from "../../helper/bcrypt";
import { createUserRepo } from "../../repositories/users/createUserRepo";
import { findUsersByEmailandUsername } from "../../repositories/users/findUsersByEmailandUsername";
import { IUser } from "../../types/user.type";

export const registerUserAction = async (data: IUser) => {
  //   console.log("register user action");
  try {
    const { username, email, password } = data;
    const users = await findUsersByEmailandUsername(username, email);
    //   if (!!users && users.length > 0) throw new Error("User already exists!");
    if (users.length) {
      return {
        status: 400,
        message: "User already exists!",
      };
    }

    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
  

    // return users;
    console.log(users);

    const addUser = await createUserRepo(data);

    return {
      status: 200,
      message: "register new User done!",
      data: addUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
