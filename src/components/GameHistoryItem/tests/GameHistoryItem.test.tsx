import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import GameHistoryItem from "../GameHistoryItem";
import * as actions from "../../../store/slices/gamesStorySlice";

jest.mock("react-redux");

const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

const defaultHistoryItem = {
  id: "Ukraine-Poland",
  parentName: "Ukraine",
  guestName: "Poland",
  guestPoints: 0,
  parentPoints: 0,
  isPlayed: false,
};

describe("GameHistoryItem", () => {
  it("should render", () => {
    const component = render(<GameHistoryItem {...defaultHistoryItem} />);

    expect(component).toMatchSnapshot();
  });

  it("should show correct names", () => {
    render(<GameHistoryItem {...defaultHistoryItem} />);
    expect(screen.getByText(defaultHistoryItem.parentName)).toBeInTheDocument();
    expect(screen.getByText(defaultHistoryItem.guestName)).toBeInTheDocument();
  });

  it("should button be in the component if game not played yet", () => {
    render(<GameHistoryItem {...defaultHistoryItem} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call saveGameResult action on button click", () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedSaveGameResult = jest.spyOn(actions, "saveGameResult");

    render(<GameHistoryItem {...defaultHistoryItem} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedSaveGameResult).toHaveBeenCalledWith({
      id: "Ukraine-Poland",
      parentName: "Ukraine",
      guestName: "Poland",
      guestPoints: 0,
      parentPoints: 0,
    });
  });
});
