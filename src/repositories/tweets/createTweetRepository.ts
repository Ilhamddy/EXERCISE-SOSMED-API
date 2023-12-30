import prisma from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const createTweetRepository = async (body: ITweet) => {
  const { userId, tweet, createdAt } = body;
  try {
    const tweets = await prisma.tweets.create({
      data: {
        userId,
        tweet,
      },
    });

    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
