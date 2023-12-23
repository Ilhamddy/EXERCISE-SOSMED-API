import prisma from "../../helper/prisma";

export const findUsersByUsername = async (username: string) => {
  try {
    // const users = await prisma.user.findUnique({
    //   where: { username },
    // });
    const users = await prisma.user.findUnique({
      where: { username },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
