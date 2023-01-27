import React from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { getPosts } from "~/store/api/services/posts";
import { snackBar } from "~/store/atoms/snackBar";
import { useAtom } from "jotai";
import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Snackbar,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { identity } from "lodash";
import LikeButton from "~/components/likes/Likes";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

enum PostAction {
  LIKE = "like",
  COMMENT = "comment",
}

const Home: React.FC = () => {
  const postsQuery = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  const [snackbar, setSnackbar] = useAtom(snackBar);
  const [currentPostAction, setCurrentPostAction] = React.useState("");
  const [isCommentOpen, setIsCommentOpen] = React.useState<null | number>(null);
  const [showMore, setShowMore] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ isOpen: false });
  };

  function handleCommentOpen(postId: number) {
    setIsCommentOpen((prevState) => {
      if (prevState === postId) {
        return null;
      }
      return postId;
    });
  }

  return (
    <>
      {postsQuery.isSuccess &&
        postsQuery.data.map(({ id, htmlContent, postComments, user }) => (
          <div key={id}>
            <Card
              sx={{
                position: "relative",
                top: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
                overflow: "auto",
                borderRadius: 4,
                boxShadow: "0px 2px 10px",
                px: 2,
                my: 2,
              }}
              key={id}
            >
              <CardHeader
                avatar={<Avatar alt="profil" src={user.avatarS3Key} />}
                titleTypographyProps={{
                  variant: "h6",
                  display: "flex",
                  justifyContent: "start",
                }}
                title={`${user.firstname} ${user.lastname}`}
                sx={{ pb: "10px" }}
              />
              <CardContent sx={{ pt: "1px" }}>
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
                <IconButton>
                  <ThumbUpIcon sx={{ width: "30px", ml: "10" }} />
                </IconButton>
                <IconButton
                  sx={{ outline: "0" }}
                  onClick={() => handleCommentOpen(id)}
                >
                  <ModeCommentRoundedIcon sx={{ width: "30px", ml: "10" }} />
                </IconButton>
              </CardActions>
              {isCommentOpen === id && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      borderTop: "solid 1px gray",
                      pl: "15px",
                      py: "10px",
                    }}
                  >
                    {/* <Avatar alt="profil" src={avatar} /> */}
                    <TextField
                      sx={{ pl: "15px" }}
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
                      {showMore ? "Afficher moins" : "Afficher plus"}
                    </IconButton>
                  )}
                </>
              )}
            </Card>

            <Snackbar
              open={snackbar.isOpen}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Votre post a bien été publié!
              </Alert>
            </Snackbar>
          </div>
        ))}
    </>
  );
};

export default Home;
