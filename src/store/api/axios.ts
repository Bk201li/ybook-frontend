import axios from 'axios';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: import.meta.env.VITE_USER_POOL_ID || '',
  ClientId: import.meta.env.VITE_CLIENT_ID || '',
};

const userPool = new CognitoUserPool(poolData);

let cognitoUser = userPool.getCurrentUser();

let jwtToken;

if (cognitoUser != null) {
  cognitoUser.getSession(function (err: any, session: any) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    jwtToken = session.getIdToken().getJwtToken();
  });
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000,
  headers: { 'content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
});

// axiosInstance.interceptors.request.use(function (config) {

//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
