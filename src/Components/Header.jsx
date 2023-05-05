import React from "react";
import "../Layouts/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Assets/Images/Linkedin Logo.png";
import profilePicture from "../Assets/Images/profile picture.png";
import HeaderOptions from "./HeaderOptions";
import {
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@mui/icons-material";

const Header = () => {
  return (
    <header className="header">
      <section className="header-left">
        <img src={Logo} alt="logo" />
        <div className="header-search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </section>
      <section className="header-right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions avatar={profilePicture} />
      </section>
    </header>
  );
};

export default Header;
