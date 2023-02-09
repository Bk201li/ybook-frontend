import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import MessagesInput from "~/components/message/MessagesInput";
import Messages from "~/components/message/Messages";

function ChatRoom() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const send = (value: string) => {
    socket?.emit("message", value);
  };
  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (message: string) => {
    setMessages([...messages, message]);
  };
  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [messages]);
  return (
    <>
      {" "}
      <MessagesInput send={send} />
      <Messages message={messages} />
    </>
  );
}

export default ChatRoom;
