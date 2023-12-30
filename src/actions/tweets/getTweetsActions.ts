import { getTweetsRepository } from "../../repositories/tweets/getTweetsRepository";

export const getTweetsAction = async () => {
  try {
    const expenses = await getTweetsRepository();
    return {
      status: 200,
      message: "succes",
      data: expenses,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
