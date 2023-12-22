import prisma from "../../helper/prisma";

export const findUsersByEmail = async (email: string) => {
  try {
    const users = await prisma.user.findUnique({
      where: { email },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
