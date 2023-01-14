import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
import { userLoggedIn, userInfos, cognitoUserAtom } from '~/store/atoms/userInfos';
import { useAtom } from 'jotai';
import SignUpConfirmation from './SignUpConfirmation';
import Copyright from '~/components/copyright/Copyright';

const theme = createTheme();

const Sign: React.FC = () => {
  const [isRegistered, setIsRegistered] = React.useState(true);
  const [isConfirmationNeeded, setIsConfirmationNeeded] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [, setUserInfos] = useAtom(userInfos);
  const [, setLoggedIn] = useAtom(userLoggedIn);
  const [, setCognitoUser] = useAtom(cognitoUserAtom);
  const poolData = {
    UserPoolId: import.meta.env.VITE_USER_POOL_ID || '',
    ClientId: import.meta.env.VITE_CLIENT_ID || '',
  };

  const userPool = new CognitoUserPool(poolData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();
    if (isRegistered) {
      login(event);
    } else {
      register(event);
      setIsConfirmationNeeded(true);
    }
  };

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const authData = {
      Username: data.get('email') as string,
      Password: data.get('password') as string,
    };
    console.log('herezrezr');
    var authenticationDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: data.get('email') as string,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('result1:', result);
        const JWTToken = result.getAccessToken().getJwtToken();
        cognitoUser.getUserAttributes(function (err, result) {
          console.log('result:', result);
          if (err) {
            console.log('err:', err);
            console.log('result2:', result);

            alert(err.message || JSON.stringify(err));
            return;
          } else if (result) {
            console.log('result:', result);
            const user = {
              id: result[0].Value,
              email: result[4].Value,
              firstname: result[2].Value,
              lastname: result[3].Value,
              avatar: '',
              token: JWTToken,
            };
            setUserInfos(user);
            setCognitoUser(cognitoUser);
          }
        });
        setLoggedIn(true);
      },
      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  const register = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const userAttributes = [];
    const email = {
      Name: 'email',
      Value: data.get('email') as string,
    };
    const password = {
      Name: 'password',
      Value: data.get('password') as string,
    };
    const firstName = {
      Name: 'given_name',
      Value: data.get('firstname') as string,
    };
    const lastName = {
      Name: 'name',
      Value: data.get('lastname') as string,
    };
    const attributeEmail = new CognitoUserAttribute(email);
    const attributeFirstName = new CognitoUserAttribute(firstName);
    const attributeLastName = new CognitoUserAttribute(lastName);
    userAttributes.push(attributeFirstName);
    userAttributes.push(attributeLastName);
    userAttributes.push(attributeEmail);
    setEmail(email.Value);
    userPool.signUp(
      email.Value,
      password.Value,
      userAttributes,
      userAttributes,
      function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        const cognitoUser = result?.user;
        setUserInfos((prevState) => ({
          ...prevState,
          email: email.Value,
          firstname: firstName.Value,
          lastname: lastName.Value,
        }));
        console.log('user name is ' + cognitoUser?.getUsername());
      }
    );
  };

  return isConfirmationNeeded ? (
    <SignUpConfirmation
      userPool={userPool}
      email={email}
      registeredSetter={setIsRegistered}
      setNeedConfirmation={setIsConfirmationNeeded}
    />
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {!isRegistered ? "S'inscrire" : 'Se connecter'}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {!isRegistered && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstname"
                      required
                      fullWidth
                      id="firstname"
                      label="Prénom"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastname"
                      label="Nom"
                      name="lastname"
                      autoComplete="family-name"
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="first_password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="first-password"
                />
              </Grid>
              {!isRegistered && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Confirmer votre mot de passe"
                    type="password"
                    id="password2"
                    autoComplete="new-password"
                  />
                </Grid>
              )}
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {!isRegistered ? "S'inscrire" : 'Se connecter'}
            </Button>
            {!isRegistered ? (
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    onClick={() => setIsRegistered(!isRegistered)}
                    className="cursor-pointer"
                    variant="body2"
                  >
                    Vous avez déjà un compte ? Se connecter
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid item xs>
                  <Link variant="body2" className="cursor-pointer">
                    Mot de passe oublié ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => setIsRegistered(!isRegistered)}
                    className="cursor-pointer"
                    variant="body2"
                  >
                    Vous n'avez pas de compte ?
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Sign;
