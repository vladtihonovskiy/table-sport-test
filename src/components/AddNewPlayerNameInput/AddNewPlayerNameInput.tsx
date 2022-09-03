import React, { useCallback, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addNewPlayerName } from "../../store/slices/gamesStorySlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { capitalizeFirstLetter } from "../../utils";

export const AddNewPlayerNameInput = () => {
  const dispatch = useAppDispatch();
  const { listOPlayers } = useAppSelector((state) => state.gameStory);

  const [textInputValue, setTextInputValue] = useState("");

  const onInputHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextInputValue(e.target.value);
    },
    []
  );

  const onAddButtonHandleClick = useCallback(() => {
    const convertedName = capitalizeFirstLetter(textInputValue.trim());
    if (listOPlayers.some((item) => item.name === convertedName)) {
      return toast.error("You can't the add same name", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    dispatch(addNewPlayerName(convertedName));
    return setTextInputValue("");
  }, [textInputValue]);

  const isAddButtonDisabled = textInputValue.trim().length < 3;

  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
      spacing={1}
      marginBottom={5}
    >
      <Grid item sx={{ width: { xs: "100%", sm: "auto" } }}>
        <TextField
          onChange={onInputHandleChange}
          size="small"
          sx={{ width: { xs: "100%", sm: "auto" } }}
          label="New Team Name"
          inputProps={{ "data-testid": "new-team-input" }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              if (!isAddButtonDisabled) {
                onAddButtonHandleClick();
              }
            }
          }}
          value={textInputValue}
        />
      </Grid>
      <Grid item sx={{ width: { xs: "100%", sm: "auto" } }}>
        <Button
          onClick={onAddButtonHandleClick}
          disabled={isAddButtonDisabled}
          sx={{ width: { xs: "100%", sm: "auto" } }}
          variant="contained"
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddNewPlayerNameInput;
