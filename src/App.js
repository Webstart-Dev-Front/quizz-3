import './App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Switch } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import waitXSeconds from './load';

const useStyles = makeStyles({
  container: {
    margin: "20px",
  },

  switch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
  },

  formElement: {
    marginTop: "10px",
    marginBottom: "10px",
  }
});

function App() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = React.useState(false);

  const send = {
    name: name,
    email: email,
    message: message
  }

  const sendMessage = async() => {
    setLoading(true)
    await waitXSeconds(2)
    console.log(send)
    setLoading(false)
  }

  const disable = (event) => {
    setChecked(!checked)
  }

  console.log(send)

  return (
    <div className={classes.container}>
      <div className={classes.switch}>
        <p>Disable form</p> 
        <Switch size="medium" checked={checked} onChange={disable} />
      </div>

    <form className={classes.form}>
      <TextField className={classes.formElement}
      onChange={(event) => { setName(event.target.value) }}
      value={name}
      id="name" 
      label="Name" 
      variant="outlined" 
      disabled={checked} />

      <TextField className={classes.formElement}
      onChange={(event) => { setEmail(event.target.value) }}
      value={email}
      id="email" 
      label="Email" 
      variant="outlined"
      disabled={checked} />

      <TextField className={classes.formElement}
      onChange={(event) => { setMessage(event.target.value) }}
      value={message}
      id="message" 
      label="Message" 
      variant="outlined"
      disabled={checked} />

      <Button className={classes.formElement} 
      onClick={sendMessage}
      variant="contained" 
      color="primary" 
      disableElevation 
      startIcon={loading ? <CircularProgress color="inherit" /> : <MailOutlineIcon />}
      disabled={checked || loading} >
        Send message
      </Button>
    </form>
    </div>
  );
}

export default App;
