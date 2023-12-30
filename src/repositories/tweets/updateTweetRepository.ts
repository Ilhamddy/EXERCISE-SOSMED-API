import prisma from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const updateTweetRepository = async (body: ITweet, id: number) => {
  const { tweet } = body;
  // const { id } = req.params;

  try {
    const result = await prisma.tweets.update({
      where: {
        id,
      },
      data: {
        tweet,
      },
    });
    return result;
  } catch (error) {
    console.error();
    throw error;
  }
};
