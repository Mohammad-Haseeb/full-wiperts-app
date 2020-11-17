import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import Button from '@material-ui/core/Button';
export default function Login(){
    return(
       <div >
           <div className="flex-container">
                <div className="firstBox">
                    <h3 className="webLink">Wipeets.Com</h3>
                      <div className="LoginDisplay">
                          <h3>Login</h3>
                          <div className="login">
                           <LoginForm/>
                           </div>
                           <div className="hrContainer">
                               <div className="HrStyling">
                                   <hr/>
                                   <p>or</p>
                                   <hr/>
                               </div>
                               <div className="ScannningDescription">
                                   <p className="scanning">You can aslo start scanning you data</p>
                                   <Button variant="outlined" className="scanningbtn" style={{backgroundColor:"greenyellow"}}>
                                        Secondary
                                     </Button>

                               </div>
                            </div>

                         </div>

                </div>
                 <div className="secondBox">
                     
                 </div>
            </div>
       </div>
    ); 
}