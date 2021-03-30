import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
}));

const MicInput = () => {
  const classes = useStyles();
  const [pin, setPin] = useState(0);
  const [pinError, setPinError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setPinError(false)

    if (pin == "") {
      setPinError(true)
    }

    if (pin) {
      console.log(pin);
    }
  };
  return (
    <Container>
      <Typography
        variant="h5"
        color="textSecondary"
        component="h2"
        gutterBottom
       
      >
        Open Mic PIN
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setPin(e.target.value)}
          className={classes.field}
          fullWidth
          label="PIN"
          variant="outlined"
          required
          color="secondary"
          error={pinError}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
        >
          OPen MIc
        </Button>
      </form>
    </Container>
  );
};

export default MicInput;
