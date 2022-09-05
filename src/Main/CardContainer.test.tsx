import React from "react";
import { render, screen } from "@testing-library/react";
import CardContainer from "./CardContainer";
import { TestId } from "../Const/TestId";

let cardContainer: HTMLElement;

beforeAll(() => {
  render(<CardContainer />);
  cardContainer = screen.getByTestId(TestId.CARD_CONTAINER);
});

test("Card container should be in the document", () => {
  expect(cardContainer).toBeInTheDocument();
});

test("it should be a card element", () => {
  if (cardContainer.firstElementChild !== null) {
    expect(cardContainer.firstElementChild.outerHTML).toContain("MuiCard-root");
  } else {
    throw new Error("There is no card in the container");
  }
});
