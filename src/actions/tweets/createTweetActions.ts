import { createTweetRepository } from "../../repositories/tweets/createTweetRepository";
import { ITweet } from "../../types/tweet.type";

export const createTweetAction = async (body: ITweet) => {
  try {
    const expense = await createTweetRepository(body);
    return {
      status: 200,
      message: " add success guyss",
      data: expense,
    };
  } catch (error) {
    console.error();
    throw error;
  }
};
