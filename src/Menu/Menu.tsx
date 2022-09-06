import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
  return (
    <nav id="menu" data-testid="menu">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Spotify_logo.svg.png"}
          id="logo-spotify"
          alt="Spotify logo"
        />
      </div>
      <MenuItem name="Home" logo="home.png" />
      <MenuItem name="CV" logo="cv.png" />
    </nav>
  );
};

export default Menu;
