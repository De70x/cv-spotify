import React, { useState } from "react";
import Menu from "./Menu/Menu";
import CardContainer from "./Main/CardContainer";
import "./App.css";
import { MenuEntry } from "./Const/MenuEntry";

const App = () => {
  const [page, setPage] = useState(MenuEntry.HOME);
  function handleClick(newValue: MenuEntry) {
    setPage(newValue);
  }
  return (
    <div className="gridContainer">
      <Menu page={page} onClick={handleClick} />
      <CardContainer page={page} />
    </div>
  );
};

export default App;
