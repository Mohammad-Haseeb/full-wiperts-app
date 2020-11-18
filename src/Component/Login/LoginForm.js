import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/Lock';
import './Form.css';
import Check from './CheckBox'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width:"80%",
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '15ch',
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [email,setEmail]=useState("");
    
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  
  return (
    <div className={classes.root}>
      <div>
        
         <form>
         <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
           type="email"
            id="outlined-adornment-amount"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            startAdornment={<InputAdornment position="start"><MailIcon style={{color:"red"}}></MailIcon></InputAdornment>}
            labelWidth={40}
          />
        </FormControl>    
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
          <OutlinedInput
           type="password"
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><LockIcon style={{color:"red"}}></LockIcon></InputAdornment>}
            labelWidth={70}
          />
        </FormControl>
        <div className="forgetAndPassword">
            <div><Check/></div>
            <div><Button>Forget Password?</Button></div>
        </div>
        <Button variant="contained" color="primary">
             Login
       </Button>
        </form>

      </div>
    </div>
  );
}
