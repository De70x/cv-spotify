import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
  return (
    <nav id="menu" data-testid="menu">
      <ul className="list">
        <img
          src={process.env.PUBLIC_URL + "/Spotify_logo.svg.png"}
          id="logo"
          alt="Spotify logo"
        />

        <MenuItem name="Home" logo="home.png" />
        <MenuItem name="CV" logo="cv.png" />
      </ul>
    </nav>
  );
};

export default Menu;
