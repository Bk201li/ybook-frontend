import { lazy } from 'react';

const Register = lazy(() => import('./Register'));

const RegisterConfig = {
  routes: [
    {
      path: 'register',
      element: <Register />,
    },
  ],
};

export default RegisterConfig;
