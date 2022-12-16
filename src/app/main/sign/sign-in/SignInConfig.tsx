import { lazy } from 'react';

const SignIn = lazy(() => import('./SignIn'));

const SignInConfig = {
  routes: [
    {
      path: 'signin',
      element: <SignIn />,
    },
  ],
};

export default SignInConfig;
