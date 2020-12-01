import './App.css';
import { useState } from 'react';
import { makeStyles, Paper, TextField, Button, CircularProgress, FormControlLabel, Switch } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import waitXSeconds from './load.js';

const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: '10px 0'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    padding: 15
  },
  button: {
    width: '40%',
    alignSelf: 'flex-end'
  },
  switch: {
    alignSelf: 'center'
  }
}))

function App() {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState();

  const logMail = async () => {
    setLoading(true)
    await waitXSeconds(5)
    const mail = {
      "name": name,
      "email": email,
      "message": message
    }
    console.log(mail)
    setLoading(false)
  }

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Paper className={classes.paper} elevation={5}>
        <FormControlLabel
          className={classes.switch}
          control={
            <Switch 
              name="checked" 
              onChange={handleChange} 
              color="primary" 
            />
          }
          label="Désactiver"
          labelPlacement="start"
        />
        <TextField
          onChange={(event) => { setName(event.target.value) }}
          value={name}
          className={classes.textfield}
          label='Name'
          placeholder='Enter a name'
          variant='outlined'
          disabled={checked}
        />
        <TextField
          onChange={(event) => { setEmail(event.target.value) }}
          value={email}
          className={classes.textfield}
          label='Email'
          placeholder='Enter an email'
          variant='outlined'
          disabled={checked}
        />
        <TextField
          className={classes.textfield}
          value={message}
          onChange={(event) => { setMessage(event.target.value) }}
          label='Message'
          placeholder='Enter a message'
          variant='outlined'
          multiline
          rows={5}
          disabled={checked}
        />
        <Button 
          className={classes.button}
          onClick={logMail}
          startIcon={loading ? <CircularProgress color="secondary" size={20} /> : <SendIcon />}
          variant='contained' 
          color="primary"
          disabled={loading || checked}
        >
          Envoyer
        </Button>
      </Paper>
    </div>
  );
}

export default App;
