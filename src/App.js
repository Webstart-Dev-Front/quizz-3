import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import waitXSeconds from './load';



// Style
const useStyles = makeStyles((theme) => ({
   
     textfield: {
         margin: theme.spacing(1),
        padding: 20,
        margin: '10px 0 ',
      }, 
    
    paper:{
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
     
      
    },

    button:{
      width: '50%',
    }

  

}));



//
function App() {

  const classes = useStyles()
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Loader 
  const[loading,setLoading] = useState(false)

  const addForm = async () => {
    setLoading(true)
    await waitXSeconds(3)
    setNom('')   
    setEmail('')
    setMessage('')
    
    const myForm = {
        name: nom,
        email: email,
        message: message,
    }
      console.log ({myForm})
      setLoading(false)
}


  return (
  <div className="App">
 <Paper className={classes.paper} 
    variant="outlined" 
    elevation={3}
    form noValidate autoComplete="off">

  <TextField 
   onChange={(event) => { setNom(event.target.value) }}
   value={nom}
   id="outlined-basic" 
   label="Name" 
   variant="outlined"
  />

<TextField 
   onChange={(event) => { setEmail(event.target.value) }}
   value={email}
   id="outlined-basic" 
   label="Email" 
   variant="outlined"
  />

  <TextField
    onChange={(event) => { setMessage(event.target.value) }}
    value={message}
    id="outlined-multiline-static"
    label="Message"
    multiline
    rows={5}
    defaultValue="Default Value"
    variant="outlined"
  />  

<Button 
    onClick={addForm} 
    startIcon={loading ? <CircularProgress size={20} /> :<ArrowRightAltIcon />} 
    variant="contained" 
    color="primary"
    disabled={loading}
    > 
    Envoyer
</Button>

   
 </Paper>
</div>
  );
}

export default App;
