import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import LoginForm from './LoginForm';
import logo from './loginImage.jpg';

export default function Login(){
    return(
        <>
         <div className="MainContiner">
       
              <div className="row">
                 <div className="col-sm-8  col1">
                    <h4 className="link"> Wiperts.Com</h4>
                     <div className="centralize"> 
                       <h3 style={{marginLeft:"4%"}}>Login</h3>
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
                               <Button variant="outlined" color="primary" className="scanningBtn" >Start scanning</Button>
                               </div>   
                      </div> 
                   </div>
                  <div className="col-sm-4   col2">
                     <img src={logo} className="secondboxImage" alt="img"/>
                  </div>
             
               </div>
         </div>
        </>
    );
}