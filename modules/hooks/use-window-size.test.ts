import { renderHook, act } from "@testing-library/react-hooks"

import useWindowSize from "./use-window-size"

describe("useWindowSize hooks", () => {
  const { result } = renderHook(() => useWindowSize())

  it("it should get the browser's window width", () => {
    expect(result.current.width).toBe(window.innerWidth);
  })

  it("it should get the browser's window height", () => {
    expect(result.current.height).toBe(window.innerHeight);
  })
})