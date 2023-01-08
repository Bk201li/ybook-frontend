import { lazy } from 'react';

const SignUpConfirmation = lazy(() => import('./SignUpConfirmation'));

const SignUpConfirmationConfig = {
  routes: [
    {
      path: 'signup/confirmation',
      element: <SignUpConfirmation />,
    },
  ],
};

export default SignUpConfirmationConfig;
