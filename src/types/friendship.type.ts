import IUser from "./user.type";

export default interface IFriendship {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  from: IUser;
  to: IUser;
  status: string;
  fromId: number;
  toId: number;
}