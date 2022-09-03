import React from "react";
import { render } from "@testing-library/react";
import PlayerStatisticTable from "../PlayerStatisticTable";

const defaultStatisticArray = [
  { draw: 1, lost: 1, name: "Ukraine", played: 2, totalPoints: 1, win: 0 },
  { draw: 1, lost: 0, name: "Poland", played: 1, totalPoints: 1, win: 0 },
];

describe("PlayerStatisticTable", () => {
  it("should render", () => {
    const component = render(
      <PlayerStatisticTable statisticArray={defaultStatisticArray} />
    );

    expect(component).toMatchSnapshot();
  });
});
