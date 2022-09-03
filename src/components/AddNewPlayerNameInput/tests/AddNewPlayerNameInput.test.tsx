import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import * as actions from "../../../store/slices/gamesStorySlice";
import AddNewPlayerNameInput from "../AddNewPlayerNameInput";

jest.mock("react-redux");

const mockedStoreSelector = jest.spyOn(reduxHooks, "useSelector");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("AddNewPlayerNameInput", () => {
  it("should render", () => {
    mockedStoreSelector.mockReturnValue({});

    const component = render(<AddNewPlayerNameInput />);

    expect(component).toMatchSnapshot();
  });

  it("should button be disabled by default", () => {
    mockedStoreSelector.mockReturnValue({});

    render(<AddNewPlayerNameInput />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should button be disabled if input less then 3 symbols", () => {
    mockedStoreSelector.mockReturnValue({});

    render(<AddNewPlayerNameInput />);

    const input = screen.getByTestId("new-team-input");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "U" } });
    expect((input as HTMLInputElement).value).toBe("U");
    expect(screen.getByRole("button")).toBeDisabled();

    fireEvent.change(input, { target: { value: "Uk" } });
    expect((input as HTMLInputElement).value).toBe("Uk");
    expect(screen.getByRole("button")).toBeDisabled();

    fireEvent.change(input, { target: { value: "Ukr" } });
    expect((input as HTMLInputElement).value).toBe("Ukr");
    expect(screen.getByRole("button")).toBeEnabled();
  });

  it("should call addNewPlayerName action on button click and clear input", () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedAddNewPlayerName = jest.spyOn(actions, "addNewPlayerName");
    mockedStoreSelector.mockReturnValue({ listOPlayers: [] });

    render(<AddNewPlayerNameInput />);

    const input = screen.getByTestId("new-team-input");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Ukraine" } });
    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledTimes(1);

    expect(mockedAddNewPlayerName).toHaveBeenCalledWith("Ukraine");
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("should not call addNewPlayerName with the same name", () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedAddNewPlayerName = jest.spyOn(actions, "addNewPlayerName");
    mockedStoreSelector.mockReturnValue({
      listOPlayers: [{ name: "Ukraine" }],
    });

    render(<AddNewPlayerNameInput />);

    const input = screen.getByTestId("new-team-input");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Ukraine" } });
    fireEvent.click(button);
    expect(mockedAddNewPlayerName).toHaveBeenCalledTimes(0);

    expect((input as HTMLInputElement).value).toBe("Ukraine");
  });
});
