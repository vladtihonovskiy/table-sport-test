import React, { useMemo } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import IGameHistoryItemProps from "./GameHistoryItem.types";

export const GameHistoryItem: React.FC<IGameHistoryItemProps> = ({
  id,
  gustPoints,
  parentPoints,
  parentName,
  guestName,
  isPlayed,
}: IGameHistoryItemProps) => {
  const renderInputs = useMemo(() => {
    if (isPlayed) {
      const gameResultText = `${parentPoints}: ${gustPoints}`;
      return <p>{gameResultText}</p>;
    }
    return (
      <>
        <TextField
          sx={{ maxWidth: 65, marginRight: 1 }}
          size="small"
          type="number"
          inputProps={{ min: 0, max: 10 }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            // @ts-ignore
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);
          }}
          onKeyPress={(event) => {
            if (event?.key === "-" || event?.key === "+") {
              event.preventDefault();
            }
          }}
          defaultValue="0"
        />
        <p>:</p>
        <TextField
          sx={{ maxWidth: 65, marginLeft: 1 }}
          size="small"
          type="number"
          inputProps={{ min: 0, max: 10 }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);
          }}
          onKeyPress={(event) => {
            if (event?.key === "-" || event?.key === "+") {
              event.preventDefault();
            }
          }}
          defaultValue="0"
        />
      </>
    );
  }, [isPlayed]);

  return (
    <Grid container direction="row" alignItems="center">
      <Box sx={{ mx: 2 }}>
        <p>{parentName}</p>
      </Box>
      {renderInputs}
      <Box sx={{ mx: 2 }}>
        <p>{guestName}</p>
      </Box>

      {/** show only if we didn't save the result * */}
      {!isPlayed && <Button variant="contained">Save</Button>}
    </Grid>
  );
};

export default GameHistoryItem;
