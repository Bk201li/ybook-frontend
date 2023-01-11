import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';

import YbookUtils from '~/@ybook/utils';
import SignInUpConfig from '~/app/main/sign/sign-in-up/SignInUpConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';

const routeConfigs = [SignInUpConfig, SignOutConfig];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <App />,
  },
]);
