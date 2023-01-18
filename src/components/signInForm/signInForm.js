import { render } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import {NavLink} from 'react-router-dom';
import "./signInForm.css";



export  default function SignInForm (){
    return (
      <div className="wrapper">
        <h1 id="title">Sign In</h1>
        <h3 className="caption">Hi there! Nice to have you back!</h3>
        <form>
          <label>
            <div className="input-icon-box"><svg className='input-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></div>
            <input type="text" placeholder="Username"/>
          </label>
          <label>
          <div className="input-icon-box"><svg className='input-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg></div>
            <input type="password" placeholder="Password"/>
          </label>
          <div className="wrap-button">
            <NavLink to="/mainPage"><button className='button-65' type="submit">Sign in</button></NavLink>
            </div>
        </form>
        <h4>New around here?</h4>
      
        <NavLink to="/signUpForm" className="sign-up"> Sign Up</NavLink>
        
        
        
    </div>
      )
}