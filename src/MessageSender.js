import React from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            placeholder={"What's on your mind?"}
          />
          <input placeholder="Upload Image" />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3> Live Video </h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo/Video </h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity </h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
