interface IConversation {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  fromId: number;
  toId: number | null;
}

interface IConversationMessage {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  conversationId: number | null;
  userId: number;
}

export type { IConversation, IConversationMessage };