import { renderHook } from "@testing-library/react";
import useNavigation from "./useNavigation";

describe("useNavigation hook", () => {
  it("should exist", () => {
    const { result } = renderHook(() => useNavigation());
    expect(result.current).toBeDefined();
  });
});
