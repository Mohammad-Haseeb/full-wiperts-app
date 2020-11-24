import React from 'react';
 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecoveryMessage from './Component/ForgetPassword/RecoveryMessage';
import MainLoginSystem from './Component/ForgetPassword/ForgetPassword';
import { Routes, Route} from 'react-router-dom';

import ForgetPasswordForm from './Component/ForgetPassword/ForgetForm';
import  NewPasswordEnterance from './Component/ForgetPassword/NewPassword';
import SuccessfullyMessage from  './Component/ForgetPassword/ChangeSuccessfuly';
import LoginForm from './Component/Login/LoginForm';

export default function App() {
  let Home=()=>{
    return(
      <h1>Hello Home</h1>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="user" element={<MainLoginSystem />}>
      <Route path="login" element={<LoginForm/>} />

         <Route path="RecoveryPassword" element={<ForgetPasswordForm/>} />
         <Route path="RecoveryMessage" element={<RecoveryMessage/>} />
         <Route path="newPassword" element={<NewPasswordEnterance/>}/>
         <Route path="RecoveryGreeting" element={<SuccessfullyMessage/>}/>


         
       </Route>
    </Routes>
  );
}
