import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import YbookUtils from '~/@ybook/utils';
import SignInUpConfig from '~/app/main/sign/sign-in-up/SignInUpConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';
import HomeConfig from "~/app/main/home/HomeConfig";

const routeConfigs = [SignInUpConfig, SignOutConfig, HomeConfig];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    element: <App />,
  },
]);
