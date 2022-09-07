import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";
import { MenuEntry } from "../Const/MenuEntry";
import { TestId } from "../Const/TestId";

interface MenuProps {
  onChange?: (page: MenuEntry) => void;
  page?: MenuEntry;
}

const Menu = (props: MenuProps) => {
  const { page, onChange } = props;
  return (
    <nav id="menu" data-testid={TestId.MENU}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Spotify_logo.svg.png"}
          id="logo-spotify"
          alt="Spotify logo"
        />
      </div>
      <MenuItem
        name="Home"
        logo="home.png"
        selected={page === MenuEntry.HOME}
      />
      <MenuItem name="CV" logo="cv.png" selected={page === MenuEntry.CV} />
    </nav>
  );
};

export default Menu;
