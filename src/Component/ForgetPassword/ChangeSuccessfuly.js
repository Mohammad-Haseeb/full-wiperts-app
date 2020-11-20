import React from 'react';
import Button from '@material-ui/core/Button';

export default function SuccessfullyMessage(){
    return(
       <>
         <h3>Your password was changed <br/>successfully</h3>
         <p style={{marginTop:"20px"}}>Your password was changed successfully.Now you can <br/> access your account again.Log in to continue using our <br/> service</p>
         <Button variant="contained" color="primary" style={{marginTop:"30px"}}>
           Login
         </Button>
              
       </>

    );

}