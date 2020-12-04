import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/Lock';
import './Form.css';
import Check from './CheckBox'
import './login.css';
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

export default function LoginForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState("");
  const [email,setEmail]=useState("");
  let navigate=useNavigate();
    
  const handleChange = (prop) => (event) => {
    setValues(event.target.value );
    console.log("Values : ",values)
  };
   let Validate=()=>{
    
   }
  
  return (
    <div className={classes.root}>
      <div>
      
       <h3 style={{marginLeft:"4%", color:"#484848",fontWeight:"600px",lineHeight:"35px",fontFamily:"Source Sans Pro",fontStyle:"normal",fontSize:"28px"}}>Log in</h3>

                     
          


         <form onSubmit={Validate}>
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
            <div><Button  onClick={()=>{
        navigate("/user/RecoveryPassword")
    }}  style={{paddingTop:"12px",fontWeight:"600px",fontSize:"14px",lineHeight:"18px",fontFamily:"Source Sans Pro",color:"#484848"}}>Forget Password?</Button></div>
        </div>
        <Button variant="contained" type="submit" style={{backgroundColor:"#02C873",marginLeft:"3%",color:"white",height:"50px",width:"90px",textTransform:"inherit",fontWeight:"bolder",fontStyle:"normal",fontSize:"14px",lineHeight:"18px"}}>
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
                                   <hr style={{border:" 0.5px solid #C1C1C1",boxSizing:"border-box",height:"0px"}}/>
                                   <p style={{color: "#424242",fontFamily:" Source Sans Pro",fontWeight:"600px",fontSize:"16px",paddingLeft:"7%",paddingRight:"7%"}}>or</p>
                                   <hr style={{border:" 0.5px solid #C1C1C1",boxSizing:"border-box",height:"0px"}}/>
                               </div>
                           </div> 
                           <div className="scanningContainer">
                               <h6 className="scanningDescription" ><span style={{fontFamily:"Source Sans Pro",color:"#484848",lineHeight:"18px",fontSize:"14px"}}>You can aslo start scanning your data.</span></h6>
                               <Button variant="outlined" color="primary" className="scanningBtn" style={{ height:"25px",marginTop:"-5px",fontFamily:"Roboto",lineHeight:"14px",fontSize:"12px",fontWeight:"bolder"}}>Start scanning</Button>
                               </div>   
    </>
  )
} 