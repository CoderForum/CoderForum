import type { IUserResponse } from './User';

export type ICommentResponse = {
  author: IUserResponse;
  content: string;
  upvotes: IUserResponse[];
};
