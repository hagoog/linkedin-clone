import React from "react";
import "../Layouts/HeaderOptions.css";
import { Avatar } from "@mui/material";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions-icon" />}
      {avatar && <Avatar className="headerOptions-icon" src={avatar} />}
      <h3 className="headerOptions-title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
