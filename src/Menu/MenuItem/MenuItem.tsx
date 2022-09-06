import React from "react";

export interface MenuItemProps {
  name?: string;
  logo?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, logo } = props;
  return (
    <div id={name} className="menu-items" data-testid="menuItem">
      <img
        src={process.env.PUBLIC_URL + "/" + logo}
        alt={logo}
        className="logo_menu"
        data-testid="logo"
      />
      <span data-testid="name">{name}</span>
    </div>
  );
};

MenuItem.defaultProps = {
  name: "Unknown",
  logo: "Unknown.png",
};

export default MenuItem;
