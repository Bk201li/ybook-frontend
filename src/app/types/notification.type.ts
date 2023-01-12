interface INotification {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  read: boolean;
  friendshipId: number | null;
  conversationMessageId: number | null;
}

export default INotification;