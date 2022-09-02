import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import GameHistoryItem from "../GameHistoryItem/GameHistoryItem";

export const GameHistoryContainer = () => {
  const { listOfGames } = useAppSelector((state) => state.gameStory);
  return (
    <Box sx={{ maxWidth: 500, width: "100%" }}>
      {listOfGames.length < 1 ? (
        <p>You need add at least 2 command to start</p>
      ) : (
        <Box sx={{ paddingTop: { xs: 5, md: 5, lg: 10 } }}>
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
