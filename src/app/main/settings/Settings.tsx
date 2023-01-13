import React from "react";
import NavBar from "../../shared-components/navbar/NavBar";
import Menu from "../../shared-components/menu/Menu";
import { styled } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import { red } from "@mui/material/colors";
import InputUnstyled from "@mui/base/InputUnstyled";
import SearchIcon from "@mui/icons-material/Search";

interface FriendsProps {}

type MessageType = {
  sender: string;
  content: string;
};

const messages: MessageType[] = [
  {
    sender: "Alex",
    content: " PeterPeterPeterPeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
  {
    sender: "Joe",
    content: "PeterPeterPeter PeterPeter PeterPeter",
  },
];

const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 7px;
    padding-left: 40px;
    border-radius: 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  `
);

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const CustomInput = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

const Friends: React.FunctionComponent<FriendsProps> = () => {
  return (
    <>
      <Menu />

      <div className="flex items-center mb-8">
        <CustomInput
          className="w-full"
          aria-label="Demo input"
          placeholder="Search"
        />
        <SearchIcon
          className="search_icon"
          sx={{
            position: "absolute",
            fill: "#377DF6 !important",
            marginLeft: "10px",
          }}
        ></SearchIcon>
      </div>

      <div className="flex flex-col items-center justify-between">
        {messages.map((message, key) => (
          <div className="flex items-center p-2.5 rounded-lg shadow	w-full  mb-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
              alt=""
            />
            <div className="flex flex-col items-start ml-3">
              <p className="font-bold">{message.sender}</p>
              <p className="text-left">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <NavBar />
    </>
  );
};

export default Friends;
