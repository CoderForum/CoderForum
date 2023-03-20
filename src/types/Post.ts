import type { ICommentResponse } from "./Comment";
import type { IUserResponse } from "./User";

export type IPostResponse = {
  comments: ICommentResponse[];
  content: string;
  title: string;
  upvotes: IUserResponse[];
  url: string;
}
