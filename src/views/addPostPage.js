import React from "react";
import AddPostForm from "../components/addPostForm/addPostForm";
import CategoriesList from "../components/categoriesList/categoriesList";
import NavBar from "../components/navBar/navBar";

export default function AddPostPage(){
    return(
        <div>
            <NavBar/>
            <CategoriesList/>
            <AddPostForm/>
        </div>
    );
}