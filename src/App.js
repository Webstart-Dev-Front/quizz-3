import './App.css';
import { Button, TextField, Paper, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import waitXSeconds from './load.js'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '.TextField': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    marginTop: 20,
    width: 300,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
  paper: {
    padding: 30,
    width:'auto',
    display:'flex',
    justifyContent:'center'
  },
  papertwo: {
    padding: 30,
    width: 500,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  center: {
    width: '100%',
    display:'flex',
    justifyContent:'center',
    marginTop: 50,
  },
}));

function App() {
  const classes = useStyles();
  const [todos, setTodos] = useState([])
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [desactiver, setDesactiver] = useState(false)
  const addOneTodo = async () => {
    setLoading(true)
    await waitXSeconds(3)
    setNom('')
    setEmail('')
    setDescription('')
    
    setLoading(false)
  }
  
  const handleChange = (event) => {
    setDesactiver(!desactiver)
  }

  console.log(nom, email, description)
  
  return (
    <div className="App">
      <div className={classes.center}>
      <Paper 
        elevation={5} 
        className={classes.paper}
      >
        <Paper 
          className={classes.papertwo} 
          elevation={5}
        >
          <FormGroup row>
            <FormControlLabel
              control={<Switch checked={desactiver} onChange={handleChange} name="checkedA" />}
              label="Desactiver"
            />
          </FormGroup>
          <form noValidate autoComplete="off">
            <TextField
              disabled={desactiver}
              value={nom} 
              className={classes.textField}
              id="outlined-basic" 
              label="Nom" 
              variant="outlined"
              onChange={ (event) => {setNom(event.target.value) }} 
            />
          </form>
          <form noValidate autoComplete="off">
            <TextField
              disabled={desactiver}
              value={email} 
              className={classes.textField}
              id="outlined-basic" 
              label="Email" 
              variant="outlined"
              onChange={ (event) => {setEmail(event.target.value) }} 
            />
          </form>
          <form noValidate autoComplete="off">
            <TextField 
              disabled={desactiver}
              value={description}
              className={classes.textField} 
              id="outlined-basic" 
              label="Description" 
              variant="outlined" 
              rows={4} 
              multiline
              onChange={ (event) => {setDescription(event.target.value) }}
            />
          </form>
          <Button 
            
            onClick={addOneTodo}
            className={classes.button} 
            variant="contained" 
            size="medium" 
            color="primary"
            disabled={loading || desactiver}
          >
            { loading ? < CircularProgress color="secondary" size={20} /> :  ' Envoyer' } <ArrowForwardIcon/>
          </Button>
        </Paper>
      </Paper>
      </div>
    </div>
  );
}

export default App;
