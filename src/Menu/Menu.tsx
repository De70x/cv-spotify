import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav id="menu" data-testid="menu">
      <ul className="list">
        <img
          src={process.env.PUBLIC_URL + "/Spotify_logo.svg.png"}
          id="logo"
          alt="Spotify logo"
        />
        <li className="items">Home</li>
        <li className="items">CV</li>
      </ul>
    </nav>
  );
};

export default Menu;
