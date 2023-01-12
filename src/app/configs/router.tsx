import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import YbookUtils from '~/@ybook/utils';
import SignInUpConfig from '~/app/main/sign/sign-in-up/SignInUpConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';

const Home = lazy(() => import('../main/home/Home'));

const routeConfigs = [SignInUpConfig, SignOutConfig];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <Home />,
  },
]);
