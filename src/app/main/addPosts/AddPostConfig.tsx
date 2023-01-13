import { lazy } from "react";

const AddPost = lazy(() => import("./addPost"));

const AddPostConfig = {
  routes: [
    {
      path: "addPost",
      element: <AddPost />,
    },
  ],
};

export default AddPostConfig;
