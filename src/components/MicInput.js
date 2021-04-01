import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Divider, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },

  contain: {
    marginTop: 90
  },

  containn: {
    marginTop: 30
  },
 
  logo: {
   
    margin: 'auto',
    textAlign: 'center',
    maxWidth: '50%',
    maxHeight: '70%',
    
  },
  logoCenter: {
    position: 'absolute', 
    left: '55%', 
    top: '8%',
    transform: 'translate(-50%, -50%)'
  }, 

  end: {
    position: 'absolute', 
    left: '', 
    top: '80%',
    width: '90%'
  }, 
  mt: {
    marginTop: 20
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
    <>
     <AppBar position="static" color="primary" className={classes.contain} >
        <Toolbar className={classes.logoCenter} >
          <Link to="/">
            <img src="/images/logo.png" alt="litmic" className={classes.logo} />
          </Link>
        </Toolbar>
      </AppBar>
    <Divider className={classes.mt} />
    <Container className={classes.containn}>
      <Typography
        variant="h5"
        color="textSecondary"
        component="h2"
        gutterBottom
        align='center'
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
          
          className={classes.end}
        >
          Open Mic
        </Button>
      </form>
    </Container>
    </>
  );
};

export default MicInput;
