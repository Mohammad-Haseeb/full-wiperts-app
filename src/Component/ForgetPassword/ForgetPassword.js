import React from 'react';
import './forgetPassword.css';
import logo from '../Login/loginImage.jpg';
import { Outlet } from 'react-router-dom';

export default function MainLoginSystem(){
    return(
        <>
         <div className="MainContiner">
       
              <div className="row">
                 <div className="col-sm-8  col1">
                 <h4 className="link"> WIPERTS.COM</h4>
                 <div className="centralize">
                     {/* <ForgetPasswordForm/> */}
                     {/* <RecoveryMessage/> */}
                     {/* <NewPasswordEnterance/> */}
                     <Outlet/>
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