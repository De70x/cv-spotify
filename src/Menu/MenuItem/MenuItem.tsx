import React from "react";
import { TestId } from "../../Const/TestId";

export interface MenuItemProps {
  name?: string;
  logo?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, logo } = props;
  return (
    <div id={name} className="menu-items" data-testid={TestId.MENU_ITEM + name}>
      <img
        src={process.env.PUBLIC_URL + "/" + logo}
        alt={logo}
        className="logo_menu"
        data-testid="logo"
      />
      <span data-testid={TestId.NAME + name}>{name}</span>
    </div>
  );
};

MenuItem.defaultProps = {
  name: "Unknown",
  logo: "Unknown.png",
};

export default MenuItem;
