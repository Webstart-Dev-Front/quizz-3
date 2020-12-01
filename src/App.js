import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Paper, Button, TextField, Typography, makeStyles, CircularProgress} from '@material-ui/core';
import {waitXSeconds} from './async.js';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: '10px 0'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    padding: 20
  },
  paper_todo: {
    display: 'flex', 
    flexDirection: 'column',
    padding: 15
  },
  paper_one_todo: {
    padding: '5px'
  },
  bonus_switch: {
    alignItems: 'center'
  },
}))

function App() {
  const classes = useStyles();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [switchto, setSwitch] = useState(false)
  const [loading, setLoading] = useState(false)

 

  const handleChange = (event) => {
    // if (switchto == false)
    //   setSwitch(true)
    // else
    //   setSwitch(false)
    setSwitch(!switchto)
  };

  const addToDo = async () => {
    setLoading(true)
    await waitXSeconds(2)
    setName('')
    setEmail('')
    setMessage('')
    const form = {
      name: name,
      email: email,
      massage: message
    }
    console.log(form)
    setLoading(false)
  }

  return (
    <div className="App">
      <Paper elevation={5} className={classes.paper}>
        <Paper className={classes.paper_todo} elevation={5}>
          <FormGroup className={classes.bonus_switch}>
            <FormControlLabel
              label="Désactiver"
              control={<Switch 
              checked={switchto} 
              onChange={handleChange}  
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }} />}
            />
          </FormGroup>
          <TextField disabled={switchto} onChange={(event) => {setName(event.target.value)}} value={name} className={classes.textfield}
            label='Nom' placeholder='Veuillez renseigner un titre' variant='outlined' />
          <TextField disabled={switchto} onChange={(event) => {setEmail(event.target.value)}} value={email} className={classes.textfield}
            label='Email' placeholder='Veuillez renseigner un titre' variant='outlined' />
          <TextField  disabled={switchto} className={classes.textfield} value={message} onChange={(event) => setMessage(event.target.value)}
            label='Message' placeholder='Veuillez renseigner la description' variant='outlined' multiline rows={5} />
         <Button disabled={switchto} onClick={addToDo} startIcon={<ArrowForwardIcon />} variant='contained' color="primary">{loading ? <CircularProgress /> : 'Envoyer'}</Button>
        </Paper>
      </Paper>
    </div>
  );
}

export default App;
