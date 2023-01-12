import { lazy } from "react";

const Friends = lazy(() => import("./Friends"));

const FriendsConfig = {
  routes: [
    {
      path: "friends",
      element: <Friends />,
    },
  ],
};

export default FriendsConfig;
