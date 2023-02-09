import React from 'react';
import { styled } from '@mui/system';
import InputUnstyled from '@mui/base/InputUnstyled';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { editUser } from '~/store/api/services/users';
import { useAtom } from 'jotai';
import { userInfos } from '~/store/atoms/userInfos';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { getUser } from '~/store/api/services/users';


interface Props {
  handleClose: any;
  open: any;
}

const Settings: React.FC<Props> = ({ handleClose, open }) => {
  const queryClient = useQueryClient();
  const [user] = useAtom(userInfos);
  const userQuery = useQuery({ queryKey: ['user'], queryFn: getUser });
  const userMutation = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const editProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();
    const data = new FormData(event.currentTarget);
    const email = {
      Name: 'email',
      Value: data.get('email') as string,
    };

    const firstname = {
      Name: 'firstname',
      Value: data.get('firstname') as string,
    };

    const lastname = {
      Name: 'lastname',
      Value: data.get('lastname') as string,
    };


    userMutation.mutate({ email: email.Value, firstname: firstname.Value, lastname: lastname.Value });

  };

  return (
    <>
      {userQuery.isSuccess &&
          <>
            <div className="flex items-center flex-col mb-20">
              <img
                className="w-20 h-20 rounded-full"
                src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                alt=""
              />

              <p className="mt-2">{userQuery.data.firstname} {userQuery.data.lastname}</p>
              <p className="mt-2">{userQuery.data.email}</p>

            </div>

            <Box component="form" noValidate onSubmit={editProfile}>
              <Grid container spacing={2}>

                <TextField
                  id="standard-required"
                  label="First name"
                  variant="standard"
                  className='w-full'
                  defaultValue={userQuery.data.firstname}
                  name='firstname'
                  sx={{ marginTop: '25px' }}
                />

                <TextField
                  id="standard-required"
                  label="Last name"
                  variant="standard"
                  className='w-full'
                  defaultValue={userQuery.data.lastname}
                  name='lastname'
                  sx={{ marginTop: '25px' }}

                />

                <TextField
                  id="standard-required"
                  label="Email"
                  variant="standard"
                  defaultValue={userQuery.data.email}
                  className='w-full'
                  name='email'
                  sx={{ marginTop: '25px' }}

                />

              </Grid>
              <div className="flex flex-row items-center mt-6 justify-between">
                <Button type="submit" variant="contained" sx={{ marginLeft: '-20px' }}>
                  Modifier
                </Button>
              </div>
            </Box>
          </>
        }
    </>
  );
};

export default Settings;
