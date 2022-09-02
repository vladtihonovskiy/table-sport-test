import React, { useCallback, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addNewPlayerName } from "../../store/slices/gamesStorySlice";

export const AddNewPlayerNameInput = () => {
  const dispatch = useAppDispatch();

  const [textInputValue, setTextInputValue] = useState("");

  const onInputHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextInputValue(e.target.value);
    },
    []
  );

  const onAddButtonHandleClick = useCallback(() => {
    dispatch(addNewPlayerName(textInputValue));
    setTextInputValue("");
  }, [textInputValue]);

  const isAddButtonDisabled = textInputValue.length < 3;

  return (
    <Grid container direction="row" alignItems="center" spacing={1} marginBottom={5}>
      <Grid item>
        <TextField
          onChange={onInputHandleChange}
          size="small"
          label="New Player Name"
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
      <Grid item>
        <Button
          onClick={onAddButtonHandleClick}
          disabled={isAddButtonDisabled}
          variant="contained"
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddNewPlayerNameInput;
