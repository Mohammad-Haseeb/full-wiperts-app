import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import FormControl from '@material-ui/core/FormControl';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {  useNavigate } from "react-router-dom";





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

export default function ForgetPasswordForm() {
  const classes = useStyles();
  const [values, setValues] = useState("");
  let navigate=useNavigate();

 
    
  const handleChange = (prop) => (event) => {
    setValues(event.target.value );
    console.log("Values : ",values)
  };
    let Validate=()=>{
      navigate("/user/RecoveryMessage");
    }
  
  return (
    <div className={classes.root}>
      <div>
          <div style={{marginLeft:"20px"}}>
             <h3 style={{fontWeight:"600px",fontSize:"28px",lineHeight:"35px",color:"#484848",fontFamily:"Source Sans Pro" }}>Forget password</h3>
              <p style={{fontFamily:"Source Sans Pro",color:"#484848",lineHeight:"18px",fontSize:"14px",fontWeight:"normal"}}>Please,enter your  email address so we can send you a link for password reset</p>
          </div>
         <form onSubmit={Validate}>
         <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="password"
            id="outlined-adornment"
            value={values.amount}
            placeholder="Enter Password"
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><MailIcon style={{color:"#02C873"}}></MailIcon></InputAdornment>}
            labelWidth={0}
            required
          />
        </FormControl>
       
        <Button variant="contained"  type="submit" style={{backgroundColor:"#02C873",marginLeft:"3%" , marginTop:"10px", height:"56px", width:"110px",color:"white",textTransform:"capitalize"}}>
             Confirm
       </Button>
       <div className="forgetAndPassword">
            
            <div><Button onClick={()=>navigate("/user/login")}  style={{fontFamily:"Source Sans Pro",color:"#484848",lineHeight:"20px",fontWeight:"600px"}}><ArrowBackIcon style={{color:"#02C873" ,marginRight:"05px", marginTop:"20px",paddingBottom:"13px"}} fontSize="large" ></ArrowBackIcon>Back to Log In Screen</Button></div>
        </div>
        </form>

      </div>
    </div>
  );
}
