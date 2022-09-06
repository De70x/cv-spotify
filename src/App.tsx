import React from "react";
import Menu from "./Menu/Menu";
import CardContainer from "./Main/CardContainer";
import "./App.css";

const App = () => {
  return (
    <div className="gridContainer">
      <Menu />
      <CardContainer />
    </div>
  );
};

export default App;
