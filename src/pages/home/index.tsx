import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { getPosts } from '~/store/api/posts';

const Home: React.FC = () => {
  const postsQuery = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  return (
    <>
      {postsQuery.isSuccess &&
        postsQuery.data.map(({ id, htmlContent, user }) => (
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
              titleTypographyProps={{ variant: 'h6', display: 'flex', justifyContent: 'start' }}
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
              <ThumbUpIcon sx={{ width: '30px', pr: '10px' }} />
              <ModeCommentRoundedIcon sx={{ width: '30px', pl: '10px' }} />
            </CardActions>
          </Card>
        ))}
    </>
  );
};

export default Home;
