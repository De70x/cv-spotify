import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

let menuItem: HTMLElement;
let logo: HTMLImageElement;
let name: HTMLElement;

test("menuItem should be in the doc", () => {
  render(<MenuItem />);
  menuItem = screen.getByTestId("menuItem");
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
  expect(name.innerHTML).toEqual("name");
});
