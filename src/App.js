import React from 'react';
 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecoveryMessage from './Component/ForgetPassword/RecoveryMessage';
import ForgetPassword from './Component/ForgetPassword/ForgetPassword';
import { Routes, Route} from 'react-router-dom';
import Login from './Component/Login/Login';
import ForgetPasswordForm from './Component/ForgetPassword/ForgetForm';
import  NewPasswordEnterance from './Component/ForgetPassword/NewPassword';
import SuccessfullyMessage from  './Component/ForgetPassword/ChangeSuccessfuly'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="forget" element={<ForgetPassword />}>
         <Route path="RecoveryPassword" element={<ForgetPasswordForm/>} />
         <Route path="RecoveryMessage" element={<RecoveryMessage/>} />
         <Route path="newPassword" element={<NewPasswordEnterance/>}/>
         <Route path="RecoveryGreeting" element={<SuccessfullyMessage/>}/>


         
       </Route>
    </Routes>
  );
}
