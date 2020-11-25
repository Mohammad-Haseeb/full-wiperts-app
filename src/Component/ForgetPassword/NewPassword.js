import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/Lock';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width:"80%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '15ch',
  },
}));

export default function  NewPasswordEnterance() {
  const classes = useStyles();
  const [values, setValues] = React.useState("");
  const [email,setEmail]=useState("");
    
  const handleChange = (prop) => (event) => {
    setValues(event.target.value );
    console.log("Values : ",values)
  };

  
  return (
    <div className={classes.root}>
      <div>
           <h2 style={{marginLeft:"15px", fontFamily:"Source Sans Pro" ,lineHeight:"35.2px",style:"normal",fontWeight:"660px",size:"28px" }}>Password Recovery</h2>
           <p style={{marginLeft:"15px",fontFamily:"Source Sans Pro",fontWeight:"400px",lineHeight:"17.6px"}}>Please,enter your new password</p>
         <form>
         <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="email"
            id="outlined-adornment-amount"
            value={email}
            placeholder="Enter your new password"
            onChange={(e)=>setEmail(e.target.value)}
            startAdornment={<InputAdornment position="start"><LockIcon style={{color:"#02C873"}}></LockIcon></InputAdornment>}
            labelWidth={0}
            required
          />
        </FormControl>    
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="password"
            id="outlined-adornment"
            value={values.amount}
            placeholder="COnfirm your new password"
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><LockIcon style={{color:"#02C873"}}></LockIcon></InputAdornment>}
            labelWidth={0}
            required
          />
        </FormControl>
        
        <Button variant="contained" style={{backgroundColor:"#02C873",marginLeft:"3%",width:"110px",height:"56px",textTransform:"capitalize",marginTop:"30px"}}>
             Confirm
       </Button>
        </form>

      </div>
    </div>
  );
}
