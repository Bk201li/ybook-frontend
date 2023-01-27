import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <ThumbUpIcon
        className={`like-button ${isClicked && "liked"}`}
        onClick={handleClick}
      />
      <span className="likes-counter">{likes}</span>
    </>
  );
};

export default LikeButton;
