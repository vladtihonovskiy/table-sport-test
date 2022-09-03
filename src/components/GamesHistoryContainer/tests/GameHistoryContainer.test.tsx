import React from "react";
import { render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import GameHistoryContainer from "../GameHistoryContainer";

jest.mock("react-redux");

const mockedStoreSelector = jest.spyOn(reduxHooks, "useSelector");

describe("GameHistoryContainer", () => {
  it("should render", () => {
    mockedStoreSelector.mockReturnValue({ listOfGames: [] });

    const component = render(<GameHistoryContainer />);

    expect(component).toMatchSnapshot();
  });

  it("should render text if listOfGames empty", () => {
    mockedStoreSelector.mockReturnValue({
      listOfGames: [],
    });

    render(<GameHistoryContainer />);

    expect(
      screen.getByText("You need add at least 2 command to start")
    ).toBeInTheDocument();
  });

  it("should render GameHistoryItem if listOfGames not empty", () => {
    mockedStoreSelector.mockReturnValue({
      listOfGames: [
        {
          id: "Ukraine-Poland",
          parentName: "Ukraine",
          guestName: "Poland",
          guestPoints: 0,
          parentPoints: 0,
          isPlayed: false,
        },
      ],
    });

    render(<GameHistoryContainer />);

    expect(
      screen.queryByText("You need add at least 2 command to start")
    ).toBeNull();

    expect(
      screen.getByTestId("Ukraine-Poland-game-history-item")
    ).toBeInTheDocument();
  });
});
