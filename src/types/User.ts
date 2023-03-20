import type { IPostResponse } from "./Post";

export type IUserResponse = {
  createdAt: number;
  email: string;
  fullName: string;
  password: string;
  posts: IPostResponse[];
  username: string;
}
