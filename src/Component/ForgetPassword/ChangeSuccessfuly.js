import React from 'react';
import Button from '@material-ui/core/Button';
import {  useNavigate } from "react-router-dom";



export default function SuccessfullyMessage(){
  let navigate=useNavigate();


    return(
       <>
         <h3 style={{marginLeft:"15px", fontFamily:"Source Sans Pro" ,lineHeight:"35.2px",style:"normal",fontWeight:"660px",size:"28px" }}>Your password was changed <br/>successfully</h3>
         <p  style={{marginLeft:"15px",fontFamily:"Source Sans Pro",fontWeight:"400px",lineHeight:"17.6px"}}>Your password was changed successfully.Now you can <br/> access your account again.Log in to continue using our <br/> service</p>
         <Button variant="contained" onClick={()=>navigate("/user/login")} color="primary" style={{marginLeft:"10px", fontFamily:"Source Sans Pro",marginTop:"30px",  color:"#FFFFFF",backgroundColor:"#02C873",textTransform:"capitalize",width:"96px",fontSize:"14px",lineHeight:"18px",height:"56px",borderRadius:"6px"}}>
           Login
         </Button>
              
       </>

    );

}