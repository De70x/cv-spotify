import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Menu from "./Menu/Menu";
import CardContainer from "./Main/CardContainer";
import { TestId } from "./Const/TestId";

// some tests just to be sure each component exists
describe("Testing component", () => {
  it("Should be able to render Menu component", () => {
    render(<Menu />);
  });
  it("Should be able to render CardContainer component", () => {
    render(<CardContainer />);
  });
});

describe("Default home page", () => {
  it("Should contain menu and card container", () => {
    render(<App />);

    const menu = screen.getByTestId(TestId.MENU);
    const cardContainer = screen.getByTestId(TestId.CARD_CONTAINER);

    expect(menu).toBeInTheDocument();
    expect(cardContainer).toBeInTheDocument();
  });
  it("Should be home page by default", () => {});
});
