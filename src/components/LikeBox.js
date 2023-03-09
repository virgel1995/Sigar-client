import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";

const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const theme = useTheme();
  const [liked, setLiked] = useState(props.liked);

  const navigate = useNavigate();

  const handleLike = (e) => {
    if (isLoggedIn()) {
      const newLikedValue = !liked;
      setLiked(newLikedValue);
      onLike(newLikedValue);
    } else {
      navigate("/login");
    }
  };

  return (
    <Stack alignItems="center" 
			sx={{
    color: 'error.main',
		backgroundColor: 'pink.500'
  }}
			>
      <IconButton sx={{ padding: 0.5 }} onClick={handleLike}>
        {liked ? (
          <IconContext.Provider value={{ color: theme.palette.success.dark }}>
            <AiFillLike />
          </IconContext.Provider>
        ) : (
	
          <AiFillLike
			          
						sx={{
							color: 'pink.500'
						}}
						/>
										
        )}
      </IconButton>
      <Typography>{likeCount}</Typography>
    </Stack>
  );
};

export default LikeBox;
