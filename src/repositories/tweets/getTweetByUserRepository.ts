import prisma from "../../helper/prisma";

export const getTweetByUserRepository = async (userId: number) => {
  try {
    const getTweet = await prisma.tweets.findMany({
      where: {
        userId,
      },
      include: {
        User: true,
      },
      orderBy: {
        id: "desc",
      },
      // where: {
      //   id,
      // },
      // select: {
      //   username: true,
      //   tweet: {
      //     select: {
      //       tweet: true,
      //     },
      //   },
      // },
    });

    return getTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
