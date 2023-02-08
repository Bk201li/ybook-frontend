import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { Box, ListItem, ListItemText, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { getPostComments } from '~/store/api/services/post-comments';
import { getPostLikes } from '~/store/api/services/post-likes';
import { createPostComment } from '~/store/api/services/post-comments';
import { createPostLike } from '~/store/api/services/post-likes';
import { deletePostLike } from '~/store/api/services/post-likes';
import IPost from '~/types/post.type';
import _ from '~/@lodash';

const Post = ({ post }: { post: IPost }) => {
  const [isPostLiked, setIsPostLiked] = useState<boolean>(false);
  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
  const [isShowMoreRequested, setIsShowMoreRequested] = useState(false);
  const [limit, setLimit] = useState<number | string>(3);
  const queryClient = useQueryClient();
  const postCommentsQuery = useQuery({
    queryKey: ['postComments', post.id],
    queryFn: () => getPostComments({ postId: post.id, limit: limit }),
  });
  const postLikesQuery = useQuery({
    queryKey: ['postLikes', post.id],
    queryFn: () => getPostLikes({ postId: post.id }),
  });
  const createPostCommentMutation = useMutation({
    mutationFn: createPostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postComments'] });
    },
  });
  const createPostLikeMutation = useMutation({
    mutationFn: createPostLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postLikes'] });
    },
  });
  const deletePostLikeMutation = useMutation({
    mutationFn: deletePostLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postLikes'] });
    },
  });

  const handleCommentOpen = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const handlePostLiked = () => {
    if (_.find(postLikesQuery.data, { userId: 1 }) === undefined) {
      setIsPostLiked(true);
      createPostLikeMutation.mutate({ postId: post.id });
    } else {
      setIsPostLiked(false);
      deletePostLikeMutation.mutate({ postId: post.id });
    }
  };

  const submitComment = (event: React.FormEvent<HTMLFormElement>, postId: number) => {
    event.preventDefault();
    event.persist();
    const data = new FormData(event.currentTarget);
    const commentary = {
      Name: 'commentary',
      Value: data.get('commentary') as string,
    };

    createPostCommentMutation.mutate({ postId, text: commentary.Value });
  };

  const handleShowMore = () => {
    if (!isShowMoreRequested) {
      setLimit('');
    } else {
      setLimit(3);
    }
    setIsShowMoreRequested(!isShowMoreRequested);
  };

  useEffect(() => {
    if (postLikesQuery.isSuccess) {
      if (_.find(postLikesQuery.data, { userId: 1 }) !== undefined) {
        setIsPostLiked(true);
      }
    }
  }, [postLikesQuery.isSuccess]);

  useEffect(() => {
    postCommentsQuery.refetch();
  }, [limit]);

  return (
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
    >
      <CardHeader
        avatar={<Avatar alt="profil" src={post.user.avatarS3Key} />}
        titleTypographyProps={{
          variant: 'h6',
          display: 'flex',
          justifyContent: 'start',
        }}
        title={`${post.user.firstname} ${post.user.lastname}`}
        sx={{ pb: '10px' }}
      />
      <CardContent sx={{ pt: '1px' }}>
        <Typography variant="body2" align="left">
          {post.htmlContent}
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
          <IconButton onClick={handlePostLiked} sx={{ paddingRight: '4px' }}>
            {isPostLiked ? <ThumbUpIcon color="primary" /> : <ThumbUpIcon />}
          </IconButton>
          {<Typography>{postLikesQuery.isSuccess && postLikesQuery.data.length}</Typography>}
        </div>
        <div className="flex items-center">
          <IconButton onClick={handleCommentOpen} sx={{ paddingRight: '4px' }}>
            <ModeCommentRoundedIcon />
          </IconButton>
          {<Typography>{postCommentsQuery.isSuccess && postCommentsQuery.data.length}</Typography>}
        </div>
      </CardActions>
      {isCommentOpen && (
        <>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => submitComment(e, post.id)}
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
          {postCommentsQuery.isSuccess &&
            postCommentsQuery.data?.map(({ id, text }) => (
              <ListItem key={id}>
                {/* <ListItemAvatar>
            <Avatar alt="profil" src={commentAvatar} />
          </ListItemAvatar> */}
                <ListItemText secondary={text} />
                {/* <ListItemText primary={user.firstname} secondary={text} /> */}
              </ListItem>
            ))}
          {postCommentsQuery.isSuccess && postCommentsQuery.data.length > 2 && (
            <IconButton onClick={handleShowMore}>
              {isShowMoreRequested ? 'Afficher moins' : 'Afficher plus'}
            </IconButton>
          )}
        </>
      )}
    </Card>
  );
};

export default Post;
