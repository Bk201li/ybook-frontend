import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import SettingsIcon from "@mui/icons-material/Settings";
import { color } from "@mui/system";

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
         

            <AddIcon className="" sx={{ width: "40px", height: "40px", padding: "6px", background: "white", borderRadius: "50px", fill:"#3773C9" }} />


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
