import { Navigate } from 'react-router-dom';
import { SignInConfig } from 'app/main/sign/sign-in/SignInConfig';

const routeConfigs = [
  SignOutConfig,
  SignInConfig,
  ApplicantSignInConfig,
  SingleSignInConfig,
  SignUpConfig,
  HomeConfig,
  SuccessfulAgencyCreationConfig,
  VerifiedAccountConfig,
  LocationAppConfig,
  CreateUpdateFormConfig,
  ApplicantFilesConfig,
  ApplicantFileConfig,
  DocumentsValidationConfig,
  SupportingDocumentsAppConfig,
  ApplicantFilesValidationConfig,
  settingsConfigApp,
  SupportingDocumentsValidationConfig,
  ApplicantDashboardConfig,
  ForgotPasswordConfig,
  SetPasswordConfig,
  ConfirmationRequiredConfig,
  ChangedPasswordConfig,
  GuestsAppConfig,
  CustomersConfig,
  ApplicantFileComparatorConfig,
  SignInSpontaneousConfig,
  ErrorMessageConfig,
  StaticContentConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/home" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '404',
    element: <Error404Page />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
