export default interface IPostComment {
    id: number,
    createdAt: string,
    updatedAt: string,
    userId: number,
    postId: number,
    text: string,
  }