
import React from "react";
import CategoriesList from "../categoriesList/categoriesList";
import NavBar from "../navBar/navBar";
import PostsContainer from "../postsContainer/postsContainer";
import './mainPage.css'

export default function MainPage (){

  
    return (
      <div className="main">
        <NavBar />
        <CategoriesList/>
        <h1>Welcome!!!!</h1>
        <div className="main-content">
        <PostsContainer/>
        </div>
        
    
     </div>
      )
}