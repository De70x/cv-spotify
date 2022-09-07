import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";
import { MenuEntry } from "../Const/MenuEntry";
import { TestId } from "../Const/TestId";

interface MenuProps {
  onChange?: any;
  page?: MenuEntry;
}

const Menu = (props: MenuProps) => {
  return (
    <nav id="menu" data-testid={TestId.MENU}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Spotify_logo.svg.png"}
          id="logo-spotify"
          alt="Spotify logo"
        />
      </div>
      <MenuItem name="Home" logo="home.png" data-testid={TestId.HOME_ENTRY} />
      <MenuItem name="CV" logo="cv.png" data-testid={TestId.CV_ENTRY} />
    </nav>
  );
};

export default Menu;
