import { lazy } from 'react';

const Register = lazy(() => import('./Register'));

const CustomersConfig = {
  routes: [
    {
      path: 'register',
      element: <Register />,
    },
  ],
};

export default CustomersConfig;
