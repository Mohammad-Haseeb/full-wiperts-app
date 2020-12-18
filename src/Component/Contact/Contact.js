import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import NavHead from '../Header';
import './contact.css'
import FAQFoot from '../FAQ/FAQFoot'
import contactFormImage  from './contactfromImage.jpg';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/Lock';
import {  useNavigate } from "react-router-dom";
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';

export default function Contact(){
    return(
        <>
         <NavHead/>
          <div className="backImage">
         
                   <div>
                     <p className="touchHead" style={{textAlign:"center"}}>Let’s Stay in Touch</p>
                     <p className="DescriptionHead" style={{textAlign:"center"}}>If you believe your personal information has been jeopardized or if you just simply prefer not to have your information made public please contact us at Info@wiperts.com, so we may help you.</p>
                      
                     
                  </div>
           </div> 
           <div className="contactFormBox">
                            <div ><img src={contactFormImage} alt="img" style={{paddingTop:"30px",width:"60%"}}></img></div>
                            <div style={{paddingTop:"20px"}}><ContactForm/></div>
                       </div>
           <FAQFoot/>
           
        </>
    );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '10ch',
  },
}));

function ContactForm(){
  const classes = useStyles();
  const [values, setValues] = React.useState("");
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");

  let navigate=useNavigate();
    
  const handleChange = (prop) => (event) => {
    setValues(event.target.value );
    console.log("Values : ",values)
  };
  let Validate=()=>{
    
  }
  return(
    <>
    <div style={{width:"55%",paddingLeft:'2%'}}>
    <form onSubmit={Validate}>
         <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="text"
            id="outlined-adornment-amount"
            value={name}
            placeholder="Enter Full Name"
            onChange={(e)=>setName(e.target.value)}
            startAdornment={<InputAdornment position="start"><PermIdentityTwoToneIcon style={{color:"#02C873"}}></PermIdentityTwoToneIcon></InputAdornment>}
            style={{marginLeft:"10px"}}
                     
            labelWidth={0}
            required
          />
        </FormControl> 
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <OutlinedInput
           type="email"
            id="outlined-adornment-amount"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            startAdornment={<InputAdornment position="start"><MailIcon style={{color:"#02C873"}}></MailIcon></InputAdornment>}
            labelWidth={0}
            style={{marginLeft:"2%"}}
            required
          />
          <MultilineTextFields required/>
        </FormControl> 
         <Button className="contactSubmitbtn" type="submit" style={{fontFamily:"Source Sans Pro",fontWeight:"bold"}}>Submit</Button>
        </form>
        </div>
    </>
  );
}

const useStyl = makeStyles((theme) => ({
  roo: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
      
      
    },
    fontFamily:"Source Sans Pro",
    color:"red",
  },
}));
 function MultilineTextFields() {
  const classes = useStyl();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.roo} noValidate autoComplete="off">
      <div>
       
      
        <TextField
          id="outlined-multiline-static"
          
          multiline
          rows={4}
          placeholder="Type Message"
          variant="outlined"
        />
      </div>
    </form>
  );
}