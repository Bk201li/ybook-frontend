import { lazy } from 'react';

const SignOut = lazy(() => import('./SignOut'));

const CustomersConfig = {
  routes: [
    {
      path: 'signout',
      element: <SignOut />,
    },
  ],
};

export default CustomersConfig;
