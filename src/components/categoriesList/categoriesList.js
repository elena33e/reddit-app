import React from "react";
import './categoriesList.css';

export default function CategoriesList(){
    return(
        <div id="category-container">
            <h2 id="categories-title">Categories</h2>
            <ul id="categories-box">
                <li className="category-item">Sports</li>
                <li className="category-item">Gaming</li>
                <li className="category-item">News</li>
                <li className="category-item">Movies</li>
                <li className="category-item">Books</li>
                <li className="category-item">Tech</li>
            </ul>
        </div>
    );
}