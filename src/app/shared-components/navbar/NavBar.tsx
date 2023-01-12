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
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
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
        <Toolbar className="bg-gray-400 flex justify-between" sx={{ py: 1 }}>
          <div>
            <IconButton className="mx-20" aria-label="open drawer">
              <HomeIcon className="text-black" />
            </IconButton>
            <IconButton className="mx-20" aria-label="open drawer">
              <GroupIcon className="text-black" />
            </IconButton>
          </div>
          <StyledFab aria-label="add">
            <AddIcon className="text-white" />
          </StyledFab>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <div>
            <IconButton color="inherit">
              <ForumRoundedIcon className="text-black" />
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon className="text-black" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
