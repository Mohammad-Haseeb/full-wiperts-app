import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
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
                            </div>

                         </div>

                </div>
                 <div className="secondBox"></div>
            </div>
       </div>
    ); 
}