import "./Feed.css";
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
        profilePic={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
        message={"This works!"}
        timestamp={"Timestamp"}
        username={"Kabbier Bali Nag"}
        image={`${process.env.PUBLIC_URL}/moto_gp.png`}
      />
      <Post
        profilePic={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
        message={"This works!"}
        timestamp={"Timestamp"}
        username={"Kabbier Bali Nag"}
        image={`${process.env.PUBLIC_URL}/moto_gp.png`}
      />
    </div>
  );
}

export default Feed;
