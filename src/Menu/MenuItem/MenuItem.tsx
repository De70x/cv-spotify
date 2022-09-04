import React from "react";

export interface MenuItemProps {
  name?: string;
  logo?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, logo } = props;
  return (
    <div className="items" data-testid="menuItem">
      <img
        src={process.env.PUBLIC_URL + "/" + logo}
        alt={logo}
        className="logo_menu"
        data-testid="logo"
      />
      <li data-testid="name">{name}</li>
    </div>
  );
};

MenuItem.defaultProps = {
  name: "Unknown",
  logo: "Unknown.png",
};

export default MenuItem;
