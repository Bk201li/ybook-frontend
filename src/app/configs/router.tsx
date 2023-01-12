import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import YbookUtils from '~/@ybook/utils';
import SignInUpConfig from '~/app/main/sign/sign-in-up/SignInUpConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';
import FriendsConfig from "~/app/main/friends/FriendsConfig";
import MessagesListConfig from "~/app/main/messages/MessagesListConfig";

const Home = lazy(() => import('../main/home/Home'));

const routeConfigs = [SignInUpConfig, SignOutConfig, FriendsConfig, MessagesListConfig];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <Home />,
  },
]);
