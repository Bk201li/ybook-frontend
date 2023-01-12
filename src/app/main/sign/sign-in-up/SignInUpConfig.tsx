import { lazy } from 'react';

const SignInUp = lazy(() => import('./SignInUp'));

const SignInUpConfig = {
  routes: [
    {
      path: 'sign',
      element: <SignInUp />,
    },
  ],
};

export default SignInUpConfig;
