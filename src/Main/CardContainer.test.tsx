import React from "react";
import { render, screen } from "@testing-library/react";
import CardContainer from "./CardContainer";
import { TestId } from "../Const/TestId";
import { MenuEntry } from "../Const/MenuEntry";

let cardContainer: HTMLElement;

describe("CardContainer tests", () => {
  it("should be in the document", () => {
    render(<CardContainer />);
    cardContainer = screen.getByTestId(TestId.CARD_CONTAINER);
    expect(cardContainer).toBeInTheDocument();
  });
  it("should be able to receive a page to display", () => {
    render(<CardContainer page={MenuEntry.CV} />);
  });
  it("should be Home by default", () => {
    render(<CardContainer />);
    const homeElement = screen.getByTestId(TestId.HOME);
    expect(homeElement).toBeInTheDocument();
  });
  it("should be able to display CV", () => {
    render(<CardContainer page={MenuEntry.CV} />);
    const cvElement = screen.getByTestId(TestId.CV);
    expect(cvElement).toBeInTheDocument();
  });
  it("should not display cv if home is displayed", () => {
    render(<CardContainer />);
    const homeElement = screen.getByTestId(TestId.HOME);
    const cvElement = screen.queryByTestId(TestId.CV);
    expect(homeElement).toBeInTheDocument();
    expect(cvElement).toBeNull();
  });
  it("should display the good component on menu click", () => {});
});
