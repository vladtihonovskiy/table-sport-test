import React from "react";
import { Box } from "@mui/material";
import GameHistoryItem from "../GameHistoryItem/GameHistoryItem";
import { useAppSelector } from "../../hooks/useAppSelector";

export const GameHistoryContainer = () => {
  const { listOfGames } = useAppSelector((state) => state.gameStory);
  return (
    <Box sx={{ width: 500 }}>
      {listOfGames.length < 1 ? (
        <p>You need add at least 2 command to start</p>
      ) : (
        <Box pt={10}>
          {listOfGames.map(
            ({
              parentPoints,
              parentName,
              guestPoints,
              id,
              guestName,
              isPlayed,
            }) => (
              <GameHistoryItem
                key={id}
                parentName={parentName}
                guestName={guestName}
                id={id}
                isPlayed={isPlayed}
                guestPoints={guestPoints}
                parentPoints={parentPoints}
              />
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default GameHistoryContainer;
