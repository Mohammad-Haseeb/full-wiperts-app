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
import './login.css';


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

export default function LoginForm() {
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
      
       <h3 style={{marginLeft:"4%", color:"#424242",fontWeight:"bold",fontFamily:"'Open Sans', sans-serif"}}>Log in</h3>

                     
          


         <form>
         <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="email"
            id="outlined-adornment-amount"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            startAdornment={<InputAdornment position="start"><MailIcon style={{color:"#02C873"}}></MailIcon></InputAdornment>}
            labelWidth={0}
            required
          />
        </FormControl>    
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="password"
            id="outlined-adornment"
            value={values.amount}
            placeholder="Enter Password"
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><LockIcon style={{color:"#02C873"}}></LockIcon></InputAdornment>}
            labelWidth={0}
            required
          />
        </FormControl>
        <div className="forgetAndPassword">
            <div><Check/></div>
            <div><Button style={{fontSize:"13px",paddingTop:"12px",fontWeight:"bold"}}>Forget Password?</Button></div>
        </div>
        <Button variant="contained" style={{backgroundColor:"#02C873",marginLeft:"3%",color:"white",height:"50px",width:"90px",textTransform:"capitalize"}}>
             Log in
       </Button>
        </form>
         <Info/>
      </div>
    </div>
  );
}

function Info(){
  return(
    <>
                               <div className="hrContainer">
                               <div className="HrStyling">
                                   <hr/>
                                   <p>or</p>
                                   <hr/>
                               </div>
                           </div> 
                           <div className="scanningContainer">
                               <h6 className="scanningDescription" ><span style={{fontSize:"13px"}}>You can aslo start scanning your data.</span></h6>
                               <Button variant="outlined" color="primary" className="scanningBtn" style={{fontSize:"11px",height:"25px",marginTop:"-5px"}}>Start scanning</Button>
                               </div>   
    </>
  )
} 