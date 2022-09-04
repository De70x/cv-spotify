import React from "react";
import { render } from "@testing-library/react";
import { Menu } from "./Menu";

test("menu should have at least one entry", () => {
  render(<Menu />);
});
