import React from "react";
import "./css/StoryReel.css";
import Story from "./Story.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function StoryReel() {
  return (
    <div className="storyReel">
      <div className="storyReel__arrow">
        <KeyboardArrowRightIcon sx={{ fontSize: 30 }} />
      </div>
      <div className="storyReel__story">
        <Story
          image={`${process.env.PUBLIC_URL}/kabbier_img.jpg`}
          profileSrc={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
          title="Kabbier Bali Nag"
        />
        <Story
          image={`${process.env.PUBLIC_URL}/mi_img.jpg`}
          profileSrc={`${process.env.PUBLIC_URL}/profile_pic_1.jpg`}
          title="Mi Ziao"
        />
        <Story
          image={`${process.env.PUBLIC_URL}/alex_img.jpg`}
          profileSrc={`${process.env.PUBLIC_URL}/profile_pic_2.jpg`}
          title="Alex Burnaby"
        />
        <Story
          image={`${process.env.PUBLIC_URL}/julie_img.jpg`}
          profileSrc={`${process.env.PUBLIC_URL}/profile_pic_3.jpg`}
          title="Julie Mason"
        />
        <Story
          image={`${process.env.PUBLIC_URL}/andrea_img.jpg`}
          profileSrc={`${process.env.PUBLIC_URL}/profile_pic_4.jpg`}
          title="Andrea Piacquadio"
        />
      </div>
    </div>
  );
}

export default StoryReel;
