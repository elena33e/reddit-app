import React from "react";
import './addPostForm.css'

export default function AddPostForm () {
    return(
        <div id="add-post-container">
            <h2>Add new post</h2>
           <form>
            <div className="input-box">
                <div className="label"><label for="post-title">Post title</label></div><br/>
                <input type="text" id="post-title" name="post-title"/><br/>
            </div>    
            <div className="input-box">
              <div className="label"><label for="post-description">Post description</label></div><br/>
              <textarea  id="post-description" name="post-description" rows='5' cols='2' maxlength='400' placeholder="Enter your description here..."/><br/>
            </div>
                
            <div className="input-box">
               <div className="label"><label for="post-link">Post link</label></div><br/>
               <input type="url" id="post-link" name="post-link"/><br/>
            </div> 

            <div className="input-box">
               <div className="label"><label for="post-link">Post image</label></div><br/>
               <input type="file" id="post-image" name="post-image" accept="image/*"/><br/>
            </div> 

            <div className="wrap-button">
               <button className='button-65' type="submit">Post</button>
            </div>
         </form>
        </div>
    )
}