import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

let menu: HTMLElement;

function initMenu() {
  render(<Menu />);
  menu = screen.getByTestId("menu");
}

beforeAll(() => {
  initMenu();
});

test("menu should be in the doc", () => {
  expect(menu).toBeInTheDocument();
});

test("menu should be a menu item", () => {
  expect(menu.outerHTML).toContain('<menu id="menu" data-testid="menu">');
});
