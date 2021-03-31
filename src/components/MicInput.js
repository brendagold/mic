import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },

  contain: {
    marginTop: 40
  }
}));

const MicInput = () => {
  let history = useHistory();
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
      history.push('/micdetails');
    }
  };
  return (
    <Container className={classes.contain}>
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
          fullWidth
        >
          Open Mic
        </Button>
      </form>
    </Container>
  );
};

export default MicInput;
