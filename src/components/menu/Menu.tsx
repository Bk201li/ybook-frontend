import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  Avatar,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const notif = [
  {
    id: 1,
    user: {
      userId: 1,
      userName: "John Doe",
      userAvatar: "https://avatars0.githubusercontent.com/u/33479836?v=4",
    },
    event: "liked your post",
  },
  {
    id: 2,
    user: {
      userId: 2,
      userName: "Max Ildan",
      userAvatar: "https://avatars0.githubusercontent.com/u/33479836?v=4",
    },
    event: "commented on your post",
  },
  {
    id: 3,
    user: {
      userId: 2,
      userName: "Max Ildan",
      userAvatar: "https://avatars0.githubusercontent.com/u/33479836?v=4",
    },
    event: "Sent you a message",
  },
  {
    id: 4,
    user: {
      userId: 1,
      userName: "John Doe",
      userAvatar: "https://avatars0.githubusercontent.com/u/33479836?v=4",
    },
    event: "commented your post",
  },
];

const Menu: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState<
    null | number
  >(null);
  function handleNotification(notifId: number) {
    setIsNotificationOpen((prevState) => {
      if (prevState === notifId) {
        return null;
      }
      return notifId;
    });
  }
  return (
    <>
      {notif.map(({ id, user, event }) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ top: 0, bottom: "auto" }}>
            <Toolbar className="flex justify-end">
              <Box
                onClick={() => handleNotification(id)}
                // sx={{ background: "#FFFFFF" }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ ml: 2 }}
                >
                  <NotificationsActiveIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {isNotificationOpen === id && (
            <>
              <Card
                sx={{
                  position: "absolute",
                  top: "60px",
                  right: "0px",
                  width: "75%",
                  maxHeight: "100%",
                  zIndex: 10,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <ListItem key={id}>
                  {
                    <>
                      <ListItemAvatar>
                        <Avatar src={user.userAvatar} />
                      </ListItemAvatar>
                      <ListItemText primary={user.userName} secondary={event} />
                    </>
                  }
                </ListItem>
              </Card>
            </>
          )}
        </Box>
      ))}
    </>
  );
};

export default Menu;
