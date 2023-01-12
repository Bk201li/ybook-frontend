import Notification from "./notification.type"
import User from "./user.type"

const enum FriendshipStatusEnum {
  PENDING = "PENDING", 
  ACCEPTED = "ACCEPTED", 
  IGNORED = "IGNORED"
}

interface IFriendshipStatus {
  pending: FriendshipStatusEnum.PENDING,
  accepted: FriendshipStatusEnum.ACCEPTED,
  ignored: FriendshipStatusEnum.IGNORED
}

interface IFriendshipRequest {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  from : User,
  to : User,
  fromId: number,
  toId: number,
  validated: boolean
  Notification: Notification[]
}

export type { IFriendshipRequest, IFriendshipStatus, FriendshipStatusEnum }