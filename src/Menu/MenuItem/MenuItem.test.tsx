import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import { TestId } from "../../Const/TestId";
import App from "../../App";

let menuItem: HTMLElement;
let logo: HTMLImageElement;
let name: HTMLElement;

process.env.PUBLIC_URL = "http://localhost";

describe("Menu Item tests", () => {
  it("Should be in the doc", () => {
    render(<MenuItem onClick={() => {}} />);
    menuItem = screen.getByTestId(TestId.MENU_ITEM, { exact: false });
    expect(menuItem).toBeInTheDocument();
  });
  it("should have default values if not set", () => {
    render(<MenuItem onClick={() => {}} />);
    logo = screen.getByTestId("logo");
    name = screen.getByTestId(/name/);
    expect(logo.alt).toEqual("Unknown.png");
    expect(name.innerHTML).toEqual("Unknown");
  });
  it("should have props correctly set", () => {
    render(<MenuItem name={"test"} logo={"logo.png"} onClick={() => {}} />);
    logo = screen.getByTestId("logo");
    name = screen.getByTestId("nametest");
    expect(logo.alt).toEqual("logo.png");
    expect(logo.src).toEqual(process.env.PUBLIC_URL + "/logo.png");
    expect(name.innerHTML).toEqual("test");
  });
  it("should be selectable", () => {
    render(<MenuItem selected={true} onClick={() => {}} />);
  });
  it("should be selected on click", () => {
    // we use app in this test in order not to force the onClick function
    // it should work by itself
    render(<App />);
    const menuItemCV = screen.getByTestId(TestId.MENU_ITEM + "CV");
    expect(menuItemCV).toHaveClass("notSelected");

    // By default, Home is selected, we will check if CV really isn't
    fireEvent(
      menuItemCV,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // Then we check if we can select it
    expect(menuItemCV).toHaveClass("selected");
  });
});
