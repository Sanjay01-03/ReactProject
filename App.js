import React from 'react'; 
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from './Components/LoginForm/loginform.jsx'; 
import SignUpForm from './Components/SignUpForm/signup.jsx'; 
import WebPage from './Components/WebPage/webpage.jsx'; 

const Navigator = () => {
    return <Navigate to='./login'/>
}
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigator/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/sign' element={<SignUpForm/>}/>
        <Route path='/home' element={<WebPage/>}/>
      </Routes>
    </BrowserRouter> 
  );
} 

export default App; 
