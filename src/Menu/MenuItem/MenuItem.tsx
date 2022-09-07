import React from "react";
import { TestId } from "../../Const/TestId";

export interface MenuItemProps {
  name?: string;
  logo?: string;
  selected?: boolean;
  onClick: any;
}

const MenuItem = (props: MenuItemProps) => {
  const { name, logo, selected, onClick } = props;

  const classNameSelected = selected ? "selected" : "notSelected";
  return (
    <div
      id={name}
      className={classNameSelected + " menu-items"}
      data-testid={TestId.MENU_ITEM + name}
      onClick={() => onClick(name)}
    >
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
