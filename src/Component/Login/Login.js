import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import LoginForm from './LoginForm';
import logo from './loginImage.jpg';

export default function Login(){
    return(
        <>
         <div className="MainContiner">
       
              <div class="row">
                 <div class="col-sm-8  col1">
                    <h4 style={{marginTop:"10px" ,marginLeft:"10px"}}> Wiperts.Com</h4>
                     <div className="centralize"> 
                        Login
                        <LoginForm/>
                        <div className="hrContainer">
                               <div className="HrStyling">
                                   <hr/>
                                   <p>or</p>
                                   <hr/>
                               </div>
                           </div> 
                           <div className="scanningContainer">
                               <h6 className="scanningDescription">You can aslo start scanning your data.</h6>
                               <Button className="scanningBtn" style={{marginTop:"-08px",marginRight:"25%",marginLeft:"10px"}}>Start scanning</Button>
                               </div>   
                      </div> 
                   </div>
                  <div class="col-sm-4   col2">
                    oiughkjh
                  </div>
             
               </div>
         </div>
        </>
    );
}