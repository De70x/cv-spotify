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
  expect(menu.outerHTML).toContain('<nav id="menu" data-testid="menu">');
  expect(menu.outerHTML).toContain("</nav>");
});

test("menu should have an ul as first child", () => {
  if (menu !== null && menu.firstElementChild !== null) {
    expect(menu.firstElementChild.outerHTML).toContain("<ul");
  }
});
test("menu should have a button as last child", () => {
  if (menu !== null && menu.lastElementChild !== null) {
    expect(menu.lastElementChild.outerHTML).toContain("<button");
  }
});
