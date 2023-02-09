import React from 'react';
import { Snackbar } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '~/store/api/services/posts';
import { snackBar } from '~/store/atoms/snackBar';
import { useAtom } from 'jotai';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import Post from '~/components/post/Post';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home: React.FC = () => {
  const [snackbar, setSnackbar] = useAtom(snackBar);
  const postsQuery = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar({ isOpen: false });
  };

  return (
    <>
      {postsQuery.isSuccess && postsQuery.data.map((post) => <Post key={post.id} post={post} />)}
      <Snackbar open={snackbar.isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Votre post a bien été publié!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
