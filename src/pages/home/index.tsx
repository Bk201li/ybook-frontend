import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { getPosts } from '~/store/api/services/posts';
import { snackBar } from '~/store/atoms/snackBar';
import { useAtom } from 'jotai';
import { Box, ListItem, ListItemAvatar, ListItemText, TextField, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { createPostComment } from '~/store/api/services/post-comments';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home: React.FC = () => {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({ queryKey: ['posts'], queryFn: getPosts });
  const [snackbar, setSnackbar] = useAtom(snackBar);
  const [isPostLiked, setIsPostLiked] = useState<null | number>(null);
  const [isCommentOpen, setIsCommentOpen] = useState<null | number>(null);
  const [showMore, setShowMore] = useState(false);
  const postCommentMutation = useMutation({
    mutationFn: createPostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar({ isOpen: false });
  };

  const handleCommentOpen = (postId: number) => {
    setIsCommentOpen((prevState) => {
      if (prevState === postId) {
        return null;
      }
      return postId;
    });
  };

  const handlePostLiked = (postId: number) => {
    setIsPostLiked((prevState) => {
      if (prevState === postId) {
        return null;
      }
      return postId;
    });
  };

  const submitComment = (event: React.FormEvent<HTMLFormElement>, id: number) => {
    event.preventDefault();
    event.persist();
    const data = new FormData(event.currentTarget);
    const commentary = {
      Name: 'commentary',
      Value: data.get('commentary') as string,
    };

    postCommentMutation.mutate({ postId: id, text: commentary.Value });
  };

  return (
    <>
      {postsQuery.isSuccess &&
        postsQuery.data.map(({ id, htmlContent, postLikes, postComments, user }) => (
          <div key={id}>
            <Card
              sx={{
                position: 'relative',
                top: '20px',
                maxWidth: '100%',
                maxHeight: '100%',
                overflow: 'auto',
                borderRadius: 4,
                boxShadow: '0px 2px 10px',
                px: 2,
                my: 2,
              }}
              key={id}
            >
              <CardHeader
                avatar={<Avatar alt="profil" src={user.avatarS3Key} />}
                titleTypographyProps={{
                  variant: 'h6',
                  display: 'flex',
                  justifyContent: 'start',
                }}
                title={`${user.firstname} ${user.lastname}`}
                sx={{ pb: '10px' }}
              />
              <CardContent sx={{ pt: '1px' }}>
                <Typography variant="body2" align="left">
                  {htmlContent}
                </Typography>
              </CardContent>
              {/* <CardMedia
              component="img"
              image={media}
              alt="User Media"
              sx={{ objectFit: 'contain', borderRadius: '15px' }}
            /> */}
              <CardActions className="flex justify-left">
                <div className="flex items-center mr-2">
                  <IconButton onClick={() => handlePostLiked(id)} sx={{ paddingRight: '4px' }}>
                    {isPostLiked === id ? <ThumbUpIcon color="primary" /> : <ThumbUpIcon />}
                  </IconButton>
                  {<Typography className="">{postLikes.length}</Typography>}
                </div>
                <div className="flex items-center">
                  <IconButton onClick={() => handleCommentOpen(id)} sx={{ paddingRight: '4px' }}>
                    <ModeCommentRoundedIcon />
                  </IconButton>
                  {<Typography className="">{postComments.length}</Typography>}
                </div>
              </CardActions>
              {isCommentOpen === id && (
                <>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={(e) => submitComment(e, id)}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      borderTop: 'solid 1px gray',
                      pl: '15px',
                      py: '10px',
                    }}
                  >
                    {/* <Avatar alt="profil" src={avatar} /> */}
                    <TextField
                      autoComplete="commentary"
                      name="commentary"
                      id="commentary"
                      label="Commentaire"
                      sx={{ pl: '15px' }}
                      placeholder="Écrivez votre réponse"
                      variant="standard"
                    />
                  </Box>
                  {postComments?.map(({ id, user, text }) => (
                    <ListItem key={id}>
                      {/* <ListItemAvatar>
                        <Avatar alt="profil" src={commentAvatar} />
                      </ListItemAvatar> */}
                      <ListItemText secondary={text} />
                      {/* <ListItemText primary={user.firstname} secondary={text} /> */}
                    </ListItem>
                  ))}
                  {postComments !== undefined && postComments.length > 3 && (
                    <IconButton onClick={() => setShowMore(!showMore)}>
                      {showMore ? 'Afficher moins' : 'Afficher plus'}
                    </IconButton>
                  )}
                </>
              )}
            </Card>

            <Snackbar open={snackbar.isOpen} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Votre post a bien été publié!
              </Alert>
            </Snackbar>
          </div>
        ))}
    </>
  );
};

export default Home;
