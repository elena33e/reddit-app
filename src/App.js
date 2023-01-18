import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home  from './components/Home/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignUpForm from './components/signUpForm/signUpForm';
import SignInForm from './components/signInForm/signInForm';
import MainPage from './components/mainPage/mainPage';
import AddPostPage from './views/addPostPage';
import OtherUserProfile from './views/otherUserProfile/otherUserProfile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
      <Routes>

      <Route index element={<Home/>}/>       
      <Route path='/signUpForm' element={<SignUpForm/>}/>
      <Route path='/signInForm' element={ <SignInForm/>}/>
      <Route path='/mainPage' element={<MainPage/>}/>
      <Route path='/addPostPage' element={<AddPostPage/>}/>
      <Route path='/otherUserProfile' element={<OtherUserProfile/>}/>

      </Routes>
   
    </BrowserRouter>
    </div>
    
  );
}

export default App;
