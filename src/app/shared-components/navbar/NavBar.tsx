import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import TextField from '@mui/material/TextField';
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemButton from '@mui/material/ListItemButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import { red } from '@mui/material/colors';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const StyledFab = styled(Fab)({
  position: "relative",
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  margin: "5 auto",
  background: "black",
});

export default function BottomAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar className="flex justify-between" sx={{ py: 1 }}>
          <div className="flex w-full justify-around items-center">
            <IconButton href="/" className="" aria-label="open drawer">
              <HomeIcon className="text-white" />
            </IconButton>
            <IconButton href="/friends" className="" aria-label="open drawer">
              <GroupIcon className="text-white" />
            </IconButton>

            <IconButton aria-describedby={id} onClick={handleClick} className="" aria-label="open drawer">
              <AddIcon className="" sx={{ width: "40px", height: "40px", padding: "6px", background: "white", borderRadius: "50px", fill: "#3773C9" }} />

            </IconButton>


            <Dialog onClose={handleClose} open={open} sx={{ width: "100vw" }}>
              <div className="p-10">

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />

                    <p className="ml-2">Ali Chamass</p>
                  </div>

                </div>

                <TextField
                  id="standard-multiline-static"
                  label="What's on your mind"
                  multiline
                  rows={4}
                  variant="standard"
                  sx={{ marginTop: "15px", width: "100%" }}
                />

                <div className="flex flex-row items-center mt-6 justify-between">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>
                  </Stack>

                  <Button variant="contained">Publier</Button>

                </div>

              </div>

            </Dialog>


            <IconButton href="/messages" color="inherit">
              <CommentIcon className="text-white" />
            </IconButton>

            <IconButton color="inherit">
              <SettingsIcon className="text-white" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
