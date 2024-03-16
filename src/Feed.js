import "./css/Feed.css";
import React from "react";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
        message={
          "Adrenaline-fueled perfection. Leaning into corners at insane speeds, these MotoGP riders make the impossible look effortless. #MotoGP #SpeedDemons⚡🏍️"
        }
        timestamp={"Timestamp"}
        username={"Kabbier Bali Nag"}
        image={`${process.env.PUBLIC_URL}/moto_gp.png`}
      />
      <Post
        profilePic={`${process.env.PUBLIC_URL}/profile_pic_4.jpg`}
        message={
          "Captivated by the timeless elegance of India Gate, a symbol of pride and patriotism"
        }
        timestamp={"Timestamp"}
        username={"Andrea Piacquadio"}
        image={`${process.env.PUBLIC_URL}/india_gate.jpg`}
      />
      <Post
        profilePic={`${process.env.PUBLIC_URL}/profile_pic_1.jpg`}
        message={
          "Embracing innovation and collaboration at our corporate headquarters, where ideas meet excellence."
        }
        timestamp={"Timestamp"}
        username={"Mi Ziao"}
        image={`${process.env.PUBLIC_URL}/corporate-office.jpg`}
      />
    </div>
  );
}

export default Feed;
