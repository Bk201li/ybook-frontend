import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import AddPost from '../addPost/AddPost';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = open ? 'simple-popover' : undefined;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar className="flex justify-between" sx={{ py: 1 }}>
          <div className="flex w-full justify-around items-center">
            <IconButton href="/" className="" aria-label="open drawer">
              <HomeIcon className="text-white" />
            </IconButton>
            <IconButton href="/friends" className="" aria-label="open drawer">
              <GroupIcon className="text-white" />
            </IconButton>

            <IconButton
              aria-describedby={id}
              onClick={handleClick}
              className=""
              aria-label="open drawer"
            >
              <AddIcon
                className=""
                sx={{
                  width: '40px',
                  height: '40px',
                  padding: '6px',
                  background: 'white',
                  borderRadius: '50px',
                  fill: '#3773C9',
                }}
              />
            </IconButton>

            <AddPost handleClose={handleClose} open={open} />

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

export default Navbar;