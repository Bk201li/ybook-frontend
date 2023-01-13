import * as React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import Copyright from '~/app/shared-components/Copyright/Copyright';
import { useAtom } from 'jotai';
import { userInfos } from '~/app/store/atoms/userInfos';
import { createUser } from '~/app/store/api/users';

interface Props {
  userPool: CognitoUserPool;
  email: string;
  registeredSetter: React.Dispatch<React.SetStateAction<boolean>>;
  setNeedConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const theme = createTheme();

const SignUpConfirmation: React.FC<Props> = ({
  userPool,
  email,
  registeredSetter,
  setNeedConfirmation,
}) => {
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const [user] = useAtom(userInfos);
  const cognitoUser = new CognitoUser(userData);
  const [confirmationCode, setConfirmationCode] = React.useState('');
  const queryClient = useQueryClient();
  const { status, error, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(['users'], newUser);
    },
  });

  const handleConfirm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const confirmationCode = data.get('confirmationCode') as string;
    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      registeredSetter(true);
      setNeedConfirmation(false);
      mutate(user);
    });
  };

  return (
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
            Confirmer votre compte
          </Typography>
          <Box component="form" noValidate onSubmit={handleConfirm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  autoComplete="confirmation-code"
                  name="confirmationCode"
                  required
                  fullWidth
                  id="confirmationCode"
                  label="Code de confirmation"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Confirmer votre compte
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUpConfirmation;
