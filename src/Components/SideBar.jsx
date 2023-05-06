import { Avatar } from "@mui/material";
import React from "react";
import "../Layouts/SideBar.css";
import background from "../Assets/Images/background.jpg";

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar-recentitem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <main className="sidebar">
      <div className="sidebar-top">
        <img src={background} />
        <Avatar className="sidebar-avatar" />
        <h2>Ahmed Magdy</h2>
        <h4>ahmedmagdy.2809@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who Viewed You</p>
          <p className="sidebar-statnumber">2,534</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statnumber">2,400</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software Engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </main>
  );
};

export default SideBar;
