import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@mui/material";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar sx={{ width: 56, height: 56 }} src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
