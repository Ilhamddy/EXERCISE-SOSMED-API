export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  isDeleted: boolean;
  createdAt: Date;
  updateAt: Date;
}
