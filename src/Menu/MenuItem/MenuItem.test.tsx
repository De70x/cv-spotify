import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import { TestId } from "../../Const/TestId";

let menuItem: HTMLElement;
let logo: HTMLImageElement;
let name: HTMLElement;

process.env.PUBLIC_URL = "http://localhost";

test("menuItem should be in the doc", () => {
  render(<MenuItem />);
  menuItem = screen.getByTestId(TestId.MENU_ITEM);
  expect(menuItem).toBeInTheDocument();
});

test("MenuItems should have default values if not set", () => {
  render(<MenuItem />);
  logo = screen.getByTestId("logo");
  name = screen.getByTestId("name");
  expect(logo.alt).toEqual("Unknown.png");
  expect(name.innerHTML).toEqual("Unknown");
});

test("MenuItems should have props correctly set", () => {
  render(<MenuItem name={"name"} logo={"logo.png"} />);
  logo = screen.getByTestId("logo");
  name = screen.getByTestId("name");
  expect(logo.alt).toEqual("logo.png");
  expect(logo.src).toEqual(process.env.PUBLIC_URL + "/logo.png");
  expect(name.innerHTML).toEqual("name");
});
