import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createPost } from '~/store/api/posts';
import Button from '@mui/material/Button';

interface Props {
  handleClose: any;
  open: any;
}

const AddPost: React.FC<Props> = ({ handleClose, open }) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const addPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();
    const data = new FormData(event.currentTarget);
    const htmlContent = {
      Name: 'htmlContent',
      Value: data.get('htmlContent') as string,
    };

    postMutation.mutate({ htmlContent: htmlContent.Value, userId: 1 });
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ width: '100vw' }}>
      <div className="p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
              alt=""
            />

            <p className="ml-2">*user name*</p>
          </div>
        </div>
        <Box component="form" noValidate onSubmit={addPost}>
          <Grid container spacing={2}>
            <TextField
              autoComplete="post-content"
              id="htmlContent"
              name="htmlContent"
              label="Ce qui vous passe par la tête..."
              multiline
              autoFocus
              required
              rows={3}
              variant="standard"
              sx={{ marginTop: '25px', width: '100%' }}
            />
          </Grid>
          <div className="flex flex-row items-center mt-6 justify-between">
            {/* <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack> */}

            <Button type="submit" variant="contained">
              Publier
            </Button>
          </div>
        </Box>
      </div>
    </Dialog>
  );
};

export default AddPost;
