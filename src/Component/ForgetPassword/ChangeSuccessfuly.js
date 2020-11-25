import React from 'react';
import Button from '@material-ui/core/Button';

export default function SuccessfullyMessage(){
    return(
       <>
         <h3 style={{marginLeft:"15px", fontFamily:"Source Sans Pro" ,lineHeight:"35.2px",style:"normal",fontWeight:"660px",size:"28px" }}>Your password was changed <br/>successfully</h3>
         <p  style={{marginLeft:"15px",fontFamily:"Source Sans Pro",fontWeight:"400px",lineHeight:"17.6px"}}>Your password was changed successfully.Now you can <br/> access your account again.Log in to continue using our <br/> service</p>
         <Button variant="contained" color="primary" style={{marginLeft:"10px",marginTop:"30px",backgroundColor:"#02C873",textTransform:"capitalize",width:"96px",height:"56px",borderRadius:"6px"}}>
           Login
         </Button>
              
       </>

    );

}