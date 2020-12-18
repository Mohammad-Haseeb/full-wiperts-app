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

import NavHead,{BodyFoot} from './Component/Header';
import Home from './Component/Home/Home';
import MainFaQ from './Component/FAQ/FQA';
import FAQuestion from './Component/FAQ/FAQquestion';
import QuestionMain from './Component/FAQ/FAQQuestionMain';
import  Contact from './Component/Contact/Contact';
import About from  './Component/About/About';
import MainBlog from './Component/Blog/BlogMain';
import  BlogReadPost from './Component/Blog/BlogRead';
import Privacy from "./Component/Home/privacyResult";

export default function App() {
  
  return (
    <>
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/privacy" element={<Privacy/>}/>


      <Route path="FAQ" element={<MainFaQ/>}/>
      <Route path="FAQ/Question" element={<QuestionMain/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Blog" element={<MainBlog/>}/>
      <Route path="BlogRead" element={<BlogReadPost/>}/>

      <Route path="user" element={<MainLoginSystem />}>
         <Route path="login" element={<LoginForm/>} />
         <Route path="RecoveryPassword" element={<ForgetPasswordForm/>} />
         <Route path="RecoveryMessage" element={<RecoveryMessage/>} />
         <Route path="newPassword" element={<NewPasswordEnterance/>}/>
         <Route path="RecoveryGreeting" element={<SuccessfullyMessage/>}/>
       </Route>
    </Routes>
    </>
  );
}
