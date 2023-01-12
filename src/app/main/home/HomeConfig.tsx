import { lazy } from "react";

const Home = lazy(() => import("./Home"));

const HomeConfig = {
  routes: [
    {
      path: "home",
      element: <Home />,
    },
  ],
};

export default HomeConfig;
