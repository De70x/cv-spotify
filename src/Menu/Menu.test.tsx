import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { TestId } from "../Const/TestId";

let menu: HTMLElement;

function initMenu() {
  render(<Menu />);
  menu = screen.getByTestId(TestId.MENU);
}

beforeAll(() => {
  initMenu();
});

test("menu should be in the doc", () => {
  expect(menu).toBeInTheDocument();
});

test("menu should be a nav item", () => {
  expect(menu.outerHTML).toContain('<nav id="menu"');
  expect(menu.outerHTML).toContain("</nav>");
});

test("menu should have some entries", () => {
  if (menu === null || menu.firstElementChild === null) {
    throw new Error("No menu entries");
  }
});
