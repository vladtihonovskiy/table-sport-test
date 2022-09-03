import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import PlayerStatisticTable from "../PlayerStatisticTable/PlayerStatisticTable";

export const TableContainer: React.FC = () => {
  const { listOPlayers } = useAppSelector((state) => state.gameStory);
  if (listOPlayers.length) {
    const sortPlayerStatisticByScore = [...listOPlayers].sort((a, b) => {
      if (a.totalPoints === b.totalPoints) {
        return 0;
      }
      return a.totalPoints < b.totalPoints ? 1 : -1;
    });

    return <PlayerStatisticTable statisticArray={sortPlayerStatisticByScore} />;
  }
  return null;
};

export default TableContainer;
