import { lazy } from 'react';

const SignOut = lazy(() => import('./SignOut'));

const SignOutConfig = {
  routes: [
    {
      path: 'signout',
      element: <SignOut />,
    },
  ],
};

export default SignOutConfig;
