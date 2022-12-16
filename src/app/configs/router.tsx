import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';

import YbookUtils from '~/@ybook/utils';
import SignInConfig from '~/app/main/sign/sign-in/SignInConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';
import RegisterConfig from '~/app/main/sign/register/RegisterConfig';

const routeConfigs = [SignInConfig, SignOutConfig, RegisterConfig];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <App />,
  },
]);
