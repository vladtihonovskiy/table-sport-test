import React, { useCallback, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export const AddNewPlayerNameInput = () => {
  const [textInputValue, setTextInputValue] = useState("");

  const onInputHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextInputValue(e.target.value);
    },
    []
  );

  const onAddButtonHandleClick = useCallback(() => {
    setTextInputValue("");
  }, []);

  const isAddButtonDisabled = !!textInputValue;

  return (
    <Grid container direction="row" alignItems="center" spacing={1}>
      <Grid item>
        <TextField
          onChange={onInputHandleChange}
          size="small"
          label="New Player Name"
          value={textInputValue}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={onAddButtonHandleClick}
          disabled={!isAddButtonDisabled}
          variant="contained"
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddNewPlayerNameInput;
