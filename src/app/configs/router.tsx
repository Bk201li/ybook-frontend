import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';

import YbookUtils from '~/@ybook/utils';
import SignInConfig from '~/app/main/sign/sign-in/SignInConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';
import SignUp from '~/app/main/sign/sign-up/SignUpConfig';

const routeConfigs = [SignInConfig, SignOutConfig, SignUp];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <App />,
  },
]);
