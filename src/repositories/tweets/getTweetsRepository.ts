import prisma from "../../helper/prisma";

export const getTweetsRepository = async () => {
  try {
    //add description
    const expenses = await prisma.tweets.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        User: true,
      },
    });

    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
