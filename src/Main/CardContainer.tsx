import React from "react";
import "./CardContainer.css";
import { MenuEntry } from "../Const/MenuEntry";

interface CCProps {
  page?: MenuEntry;
}

const CardContainer = (props: CCProps) => {
  let { page } = props;
  if (!page) {
    page = MenuEntry.HOME;
  }
  return (
    <div data-testid="cardContainer" id="cardContainer">
      {MenuEntry.HOME === page && <div data-testid={"home"}>HOME</div>}
      {MenuEntry.CV === page && <div data-testid={"cv"}>CV</div>}
    </div>
  );
};

export default CardContainer;
