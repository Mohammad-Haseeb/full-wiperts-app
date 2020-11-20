import React from 'react';
import Button from '@material-ui/core/Button';

export default function RecoveryMessage(){
    return(
       <>
         <h3>The link for password recovery <br/> was successfully sent to your <br/>email address</h3>
         <p style={{marginTop:"20px"}}>The link for password recovery was successfully sent to your <br/> email address. Please, check your email box</p>
         <Button variant="contained" color="primary" style={{marginTop:"30px"}}>
           Back to Home Page
         </Button>
              
       </>

    );

}