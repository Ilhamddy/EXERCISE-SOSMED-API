import prisma from "../../helper/prisma";

export const findUsersByEmailandUsername = async (
  username: string,
  email: string
) => {
  try {
    const addUser = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              equals: email,
            },
          },
          {
            username: {
              equals: username,
            },
          },
        ],
      },
    });
    return addUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
