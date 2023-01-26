import React from 'react';
import { styled } from '@mui/system';
import InputUnstyled from '@mui/base/InputUnstyled';
import SearchIcon from '@mui/icons-material/Search';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editUser } from '~/store/api/users';
import { useAtom } from 'jotai';
import { userInfos } from '~/store/atoms/userInfos';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface Props {
  handleClose: any;
  open: any;
}

const Settings: React.FC<Props> = ({ handleClose, open }) => {
  const queryClient = useQueryClient();
  const [user] = useAtom(userInfos);

  const userMutation = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const editProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();
    const data = new FormData(event.currentTarget);
    const htmlContent = {
      Name: 'htmlContent',
      Value: data.get('htmlContent') as string,
    };

    userMutation.mutate({ email: user.email, firstname: user.firstname, lastname: user.lastname });
    handleClose();
  };

  return (
    <>
      <div className="flex items-center flex-col mb-20">
        <img
          className="w-20 h-20 rounded-full"
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
          alt=""
        />

        <p className="mt-2">Ali Chamass</p>
      </div>

      <Box component="form" noValidate onSubmit={editProfile}>
        <Grid container spacing={2}>

          <TextField
            id="standard-required"
            label="First name"
            defaultValue= {user.firstname}
            variant="standard"
            className='w-full'
            sx={{ marginTop: '25px'}}
          />

          <TextField
            id="standard-required"
            label="Last name"
            defaultValue= {user.lastname}
            variant="standard"
            className='w-full'
            sx={{ marginTop: '25px'}}

          />

          <TextField
            id="standard-required"
            label="Email"
            defaultValue= {user.email}
            variant="standard"
            className='w-full'
            sx={{ marginTop: '25px'}}

          />

        </Grid>
        <div className="flex flex-row items-center mt-6 justify-between">
          <Button type="submit" variant="contained" sx={{ marginLeft: '-20px'}}>
            Modifier
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Settings;
