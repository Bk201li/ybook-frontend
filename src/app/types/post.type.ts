interface IPost {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  htmlContent: string;
  userId: number;
}

interface IPostLike {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  postId: number;
}
interface IPostComment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  postId: number;
  text: string;
}

interface IPostAttachment{
  id: number;
  type: DocumentType;
  s3Key: string;
}

export type { IPost, IPostLike, IPostComment, IPostAttachment };