import IUser from './user.type';

export default interface IPostComment {
    id: number,
    createdAt: string,
    updatedAt: string,
    userId: number,
    postId: number,
    user: IUser,
    text: string,
  }