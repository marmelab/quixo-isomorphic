import React from "react";
import Game from "../../pages/game";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("GamePage tests", () => {
  it("should display 25 cubes", () => {
    const mockedBoard = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const { getAllByTitle } = render(<Game board={mockedBoard} />);
    const isWelcomePresent = getAllByTitle(/cube*/i);

    expect(isWelcomePresent.length).toBe(25);
  });
});
