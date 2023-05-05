import React from "react";
import "../Layouts/Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className="header">
      <h1>Header</h1>
      <section className="header-left">
        <img src="" />
        <div className="header-search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </section>
      <section className="header-right"></section>
    </header>
  );
};

export default Header;
