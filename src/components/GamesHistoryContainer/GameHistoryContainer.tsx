import React from "react";
import { Box } from "@mui/material";
import GameHistoryItem from "../GameHistoryItem/GameHistoryItem";
import { useAppSelector } from "../../hooks/useAppSelector";

export const GameHistoryContainer = () => {
  const { listOfGames } = useAppSelector((state) => state.gameStory);
  return (
    <Box sx={{ width: 450 }}>
      {listOfGames.length < 1 ? (
        <p>You need add at least 2 command to start</p>
      ) : (
        <>
          {listOfGames.map(
            ({
              parentPoints,
              parentName,
              gustPoints,
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
                gustPoints={gustPoints}
                parentPoints={parentPoints}
              />
            )
          )}
        </>
      )}
    </Box>
  );
};

export default GameHistoryContainer;
