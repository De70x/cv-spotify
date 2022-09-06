import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu/Menu";
import CardContainer from "./Main/CardContainer";
import App from "./App";
import { TestId } from "./Const/TestId";

// some tests just to be sure each component exists
test("render the menu", () => {
  render(<Menu />);
});

test("render the card container", () => {
  render(<CardContainer />);
});

test("default app should display at least the menu and the cardContainer", () => {
  render(<App />);

  const menu = screen.getByTestId(TestId.MENU);
  const cardContainer = screen.getByTestId(TestId.CARD_CONTAINER);

  expect(menu).toBeInTheDocument();
  expect(cardContainer).toBeInTheDocument();
});

test("App should display Home first");
