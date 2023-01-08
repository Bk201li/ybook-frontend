import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';

import YbookUtils from '~/@ybook/utils';
import SignInUpConfig from '~/app/main/sign/sign-in-up/SignInUpConfig';
import SignOutConfig from '~/app/main/sign/sign-out/SignOutConfig';
import SignUpConfirmationConfig from '~/app/main/sign/sign-up-confirmation/SignUpConfirmationConfig';

const routeConfigs = [SignInUpConfig, SignOutConfig, SignUpConfirmationConfig];

export const router = createBrowserRouter([
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <App />,
  },
]);
