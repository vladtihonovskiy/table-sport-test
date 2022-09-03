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
          sx={{ maxWidth: 70, mx: 1 }}
          size="small"
          type="number"
          disabled={isPlayed}
          inputProps={{ min: 0, max: 10 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = Math.max(0, parseInt(e.target.value, 10))
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
          sx={{ maxWidth: 70, mx: 1 }}
          size="small"
          type="number"
          disabled={isPlayed}
          inputProps={{ min: 0, max: 10 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = Math.max(0, parseInt(e.target.value, 10))
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
    <Grid
      data-testid={`${id}-game-history-item`}
      container
      alignItems="center"
      sx={{
        flexDirection: { sm: "row" },
        height: { xs: "auto", sm: 50 },
        marginLeft: { xs: 0, sm: 10 },
        marginTop: { xs: 1, sm: 0 },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <Box sx={{ m: { xs: 0, sm: 2 }, maxWidth: 60, width: "100%" }}>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
        >
          {parentName}
        </Typography>
      </Box>
      {renderInputs}
      <Box sx={{ m: { xs: 0, sm: 2 }, maxWidth: 60, width: "100%" }}>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
        >
          {guestName}
        </Typography>
      </Box>

      {/** show only if we didn't save the result * */}
      {!isPlayed && (
        <Button
          sx={{ width: { xs: "100%", sm: "auto" }, my: { xs: 1, sm: 0 } }}
          onClick={onSaveHandleClick}
          variant="contained"
        >
          Save
        </Button>
      )}
    </Grid>
  );
};

export default GameHistoryItem;
