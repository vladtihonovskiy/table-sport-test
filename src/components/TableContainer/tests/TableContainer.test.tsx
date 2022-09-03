import React from "react";
import { render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import TableContainer from "../TableContainer";

jest.mock("react-redux");

const mockedStoreSelector = jest.spyOn(reduxHooks, "useSelector");

const defaultStatisticArray = [
  { draw: 0, lost: 1, name: "Poland", played: 1, totalPoints: 1, win: 0 },
  { draw: 0, lost: 0, name: "Ukraine", played: 1, totalPoints: 3, win: 1 },
];

describe("TableContainer", () => {
  it("should render", () => {
    mockedStoreSelector.mockReturnValue({
      listOPlayers: defaultStatisticArray,
    });

    const component = render(<TableContainer />);

    expect(component).toMatchSnapshot();
  });

  it("should render empty component", () => {
    mockedStoreSelector.mockReturnValue({
      listOPlayers: [],
    });

    render(<TableContainer />);
    expect(screen.queryByTestId("table-component")).toBeNull();
  });

  it("should sort work", () => {
    mockedStoreSelector.mockReturnValue({
      listOPlayers: defaultStatisticArray,
    });

    render(<TableContainer />);
    expect(screen.queryByTestId("table-component")).toBeInTheDocument();
    const data = screen.queryAllByTestId("table-test-row-name");
    expect(data[0].textContent).toBe("Ukraine");
  });
});
