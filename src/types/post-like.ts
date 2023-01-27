import IUser from "./user.type";
import IPost from "./post.type";

export default interface IPostLike {
    id: number,
    createdAt: string,
    updatedAt: string,
    user: IUser
    post: IPost,
    userId: number,
    postId: number,
  }