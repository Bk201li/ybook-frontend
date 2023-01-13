import React from 'react';
import NavBar from '../../shared-components/navbar/NavBar';
import Menu from '../../shared-components/menu/Menu';
import { styled } from '@mui/system';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import { red } from '@mui/material/colors';
import InputUnstyled from '@mui/base/InputUnstyled';
import SearchIcon from '@mui/icons-material/Search';

interface AddPostProps {}




const addPosts: React.FunctionComponent<AddPostProps> = () => {
  return (
    <>
      

      <NavBar />
    </>
  );
};

export default addPosts;
