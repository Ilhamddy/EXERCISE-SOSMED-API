import prisma from "../../helper/prisma";

export const deleteTweetRepository = async (id: number) => {
  try {
    const result = await prisma.tweets.delete({
      where: { id }, // delete all expenses
    });
    return result;
  } catch (error) {
    console.error();
    throw error;
  }
};
