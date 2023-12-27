import { deleteTweetRepository } from "../../repositories/tweets/deleteTweetRepository";
import { getTweetsRepository } from "../../repositories/tweets/getTweetsRepository";

export const deleteTweetAction = async (id: number) => {
  try {
    await deleteTweetRepository(id);
    const expenses = await getTweetsRepository();
    return {
      status: 200,
      message: "succes delete data",
      data: expenses,
    };
  } catch (error) {
    console.error();
    throw error;
  }
};
