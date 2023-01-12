import { lazy } from "react";

const MessagesList = lazy(() => import("./MessagesList"));

const MessagesListConfig = {
  routes: [
    {
      path: "messages",
      element: <MessagesList />,
    },
  ],
};

export default MessagesListConfig;
