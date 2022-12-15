import YbookUtils from '@ybook/utils';
import { Navigate } from 'react-router-dom';
import SignInConfig from 'app/main/sign/sign-in/SignInConfig';
import SignOutConfig from 'app/main/sign/sign-out/SignOutConfig';
import RegisterConfig from 'app/main/sign/register/RegisterConfig';

const routeConfigs = [SignInConfig, SignOutConfig, RegisterConfig];

const routes = [
  ...YbookUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
];

export default routes;
