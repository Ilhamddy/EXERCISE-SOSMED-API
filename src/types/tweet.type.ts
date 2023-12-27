export interface ITweet {
  id: number;
  userId: number;
  tweet: string;
  isDeleted: boolean;
  createdAt: Date;
  updateAt: Date;
}
