export default interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstname: string;
  lastname: string;
  email: string;
  avatarS3Key: string;
  coverPicS3Key: string;
  config: string;
}