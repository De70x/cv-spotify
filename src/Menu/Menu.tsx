import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav id="menu" data-testid="menu">
      <ul className="list">
        <li className="items">Home</li>
        <li className="items">CV</li>
      </ul>
      <button className="btn">BTN</button>
    </nav>
  );
};

export default Menu;
