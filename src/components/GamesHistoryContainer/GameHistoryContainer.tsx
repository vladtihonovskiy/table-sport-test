import React from "react";
import { Box } from "@mui/material";
import GameHistoryItem from "../GameHistoryItem/GameHistoryItem";

export const GameHistoryContainer = () => (
  <Box sx={{ width: 450 }}>
    <GameHistoryItem
      parentName="Ukraine"
      guestName="Poland"
      id="someId"
      isPlayed={false}
      gustPoints={0}
      parentPoints={2}
    />
  </Box>
);

export default GameHistoryContainer;
