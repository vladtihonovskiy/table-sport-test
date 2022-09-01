import React, { useCallback, useMemo, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import IGameHistoryItemProps from "./GameHistoryItem.types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { saveGameResult } from "../../store/slices/gamesStorySlice";

export const GameHistoryItem: React.FC<IGameHistoryItemProps> = ({
  id,
  guestPoints,
  parentPoints,
  parentName,
  guestName,
  isPlayed,
}: IGameHistoryItemProps) => {
  const dispatch = useAppDispatch();

  const [parentPointsInput, setParentPointsInput] = useState(
    isPlayed ? parentPoints : "0"
  );
  const [guestPointsInput, setGuestPointsInput] = useState(
    isPlayed ? guestPoints : "0"
  );

  const onSaveHandleClick = useCallback(() => {
    dispatch(
      saveGameResult({
        id,
        parentPoints: +parentPointsInput,
        guestPoints: +guestPointsInput,
        parentName,
        guestName,
      })
    );
  }, [id, parentPointsInput, guestPointsInput, parentName, guestName]);

  const renderInputs = useMemo(
    () => (
      <>
        <TextField
          sx={{ maxWidth: 70, mx: 2 }}
          size="small"
          type="number"
          disabled={isPlayed}
          inputProps={{ min: 0, max: 10 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);
            setParentPointsInput(+e.target.value);
          }}
          onKeyPress={(event) => {
            if (event?.key === "-" || event?.key === "+") {
              event.preventDefault();
            }
          }}
          value={+parentPointsInput}
        />
        <p>:</p>
        <TextField
          sx={{ maxWidth: 70, mx: 2 }}
          size="small"
          type="number"
          disabled={isPlayed}
          inputProps={{ min: 0, max: 10 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);

            setGuestPointsInput(+e.target.value);
          }}
          value={+guestPointsInput}
          onKeyPress={(event) => {
            if (event?.key === "-" || event?.key === "+") {
              event.preventDefault();
            }
          }}
        />
      </>
    ),
    [isPlayed, parentPointsInput, guestPointsInput]
  );

  return (
    <Grid container direction="row" alignItems="center" height={50}>
      <Box sx={{ mx: 2, maxWidth: 60, width: "100%" }}>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {parentName}
        </Typography>
      </Box>
      {renderInputs}
      <Box sx={{ mx: 2, maxWidth: 60, width: "100%" }}>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {guestName}
        </Typography>
      </Box>

      {/** show only if we didn't save the result * */}
      {!isPlayed && (
        <Button onClick={onSaveHandleClick} variant="contained">
          Save
        </Button>
      )}
    </Grid>
  );
};

export default GameHistoryItem;
