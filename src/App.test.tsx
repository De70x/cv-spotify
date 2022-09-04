import React from "react";
import { render, screen } from "@testing-library/react";
import { Menu } from "./Menu/Menu";
import App from "./App";

test("render title CV Spotify", () => {
  render(<App />);
  const linkElement = screen.getByText(/CV Spotify/i);
  expect(linkElement).toBeInTheDocument();
});

test("render the menu", () => {
  render(<Menu />);
});
