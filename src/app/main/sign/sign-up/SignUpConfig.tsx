import { lazy } from 'react';

const SignUp = lazy(() => import('./SignUp'));

const SignUpConfig = {
  routes: [
    {
      path: 'signup',
      element: <SignUp />,
    },
  ],
};

export default SignUpConfig;
