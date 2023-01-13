import { lazy } from "react";

const Settings = lazy(() => import("./Settings"));

const SettingsConfig = {
  routes: [
    {
      path: "settings",
      element: <Settings />,
    },
  ],
};

export default SettingsConfig;
