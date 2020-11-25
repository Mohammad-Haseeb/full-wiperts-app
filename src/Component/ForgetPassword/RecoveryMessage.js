import React from 'react';
import Button from '@material-ui/core/Button';

export default function RecoveryMessage(){
    return(
       <>
         <h3 style={{fontFamily:"Source Sans Pro" ,lineHeight:"35.2px",style:"normal",fontWeight:"660px",size:"28px" }}>The link for password recovery <br/> was successfully sent to your <br/>email address</h3>
         <p style={{marginTop:"20px",fontFamily:"Source Sans Pro",fontWeight:"400px",lineHeight:"17.6px"}}>The link for password recovery was successfully sent to your <br/> email address. Please, check your email box</p>
         <Button variant="contained"  style={{backgroundColor:"#02C873",color:"white",marginTop:"30px",width:"174px",height:"56px",textTransform:"capitalize",borderRadius:"6px"}}>
           Back to Home Page
         </Button>
              
       </>

    );

}