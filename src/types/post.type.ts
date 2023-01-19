import IUser from "./user.type";

export default interface IPost {
    id: number,
    createdAt: string,
    updatedAt: string,
    htmlContent: string,
    userId: number,
    postLikes: [],
    postComments: [],
    postAttachments: [],
    user: IUser
  }