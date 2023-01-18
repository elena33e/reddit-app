import React from "react";
import CategoriesList from "../../components/categoriesList/categoriesList";
import NavBar from "../../components/navBar/navBar";
import PostContainer from "../../components/postContainer/postContainer";
import './otherUserProfile.css';

export default function OtherUserProfile(){
    return(
      <div>
      <div>
       <NavBar />
       <CategoriesList/>
        <div id="add-post-container">
         <div id="name-img-box">
            <div><img className="profile-image" src="https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"/></div>
            <h4>User Name</h4>
         </div>

         <div className="user-data">
            <div className="info-box">
                <h3>Karma</h3>
                <p>234</p>
            </div>
            <div id="vertical-line"></div>
            <div className="info-box">
                <h3>Joined on</h3>
                <p>23 ian 2012</p>
            </div>
         </div>

         <button className='button-65 follow-btn' type="submit">Follow</button>

         <div id="user-bio">
            <h2>Bio</h2>
            <div id="bio-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
         </div>
      </div>
      </div>

      <div id="user-posts-container" >
         <div id="user-posts">
            <h2>Posts</h2>
            <div id="posts-container">
            <PostContainer/>
            <PostContainer/>
            </div>
         </div>
      </div>
    </div>
    
    );
}