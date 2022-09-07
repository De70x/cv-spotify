import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { TestId } from "../Const/TestId";
import { MenuEntry } from "../Const/MenuEntry";
import App from "../App";

describe("Menu tests", () => {
  it("should be in the doc", () => {
    render(<Menu onClick={() => {}} />);
    const menu = screen.getByTestId(TestId.MENU);
    expect(menu).toBeInTheDocument();
  });
  it("should be a nav item", () => {
    render(<Menu onClick={() => {}} />);
    const menu = screen.getByTestId(TestId.MENU);
    expect(menu.outerHTML).toContain("</nav>");
  });
  it("should have some entries", () => {
    render(<Menu onClick={() => {}} />);
    const menu = screen.getByTestId(TestId.MENU);
    if (menu === null || menu.firstElementChild === null) {
      throw new Error("No menu entries");
    }
  });

  it("should know the current page", () => {
    render(<Menu page={MenuEntry.CV} onClick={() => {}} />);
  });
  it("Home should be selected by default", () => {
    render(<App />);
    const menuItem = screen.getByTestId(TestId.MENU_ITEM + "Home");
    expect(menuItem).toHaveClass("selected");
  });
});
