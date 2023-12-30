import { updateTweetRepository } from "../../repositories/tweets/updateTweetRepository";
import { ITweet } from "../../types/tweet.type";

export const updateTweetAction = async (id: number, body: ITweet) => {
  try {
    const expense = await updateTweetRepository(body, id);

    return {
      status: 200,
      message: " Update success guyss",
      data: expense,
    };
  } catch (error) {
    console.error();
    throw error;
  }
};
