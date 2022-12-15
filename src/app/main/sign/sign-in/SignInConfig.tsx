import { lazy } from 'react';

const SignIn = lazy(() => import('./SignIn'));

const CustomersConfig = {
  routes: [
    {
      path: 'signin',
      element: <SignIn />,
    },
  ],
};

export default CustomersConfig;
