import React, { useEffect } from "react";
import PostContainer from "../postContainer/postContainer";
import './postsContainer.css'
import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments,
  } from '../../store/redditSlice';
import { useDispatch, useSelector } from "react-redux";
import getRandomNumber from '../../utils/getRandomNumber';
import { AnimatedList } from "react-animated-list";

export default function PostsContainer(){

    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit]);

    const onToggleComments =(index) => {
        const getComments = (permalink) => {
           dispatch(fetchComments(index, permalink));
        }

        return getComments;
    }

    if(isLoading){
        return(
            <AnimatedList animation="zoom">
                {Array(getRandomNumber(3, 10)).fill(<div/>)}
            </AnimatedList>
        )
    }

    if(error){
        return(
            <div className="error">
                <h2>Failed to load posts</h2>
                <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                    Try again
                </button>
            </div>
        )

    }

    return(
        <div className="posts-container">
            <div id="posts-category"><h1 >Recent Posts</h1></div>
            {posts.map((post, index) => (
            <PostContainer
              key={post.id}
              post={post}
              onToggleComments={onToggleComments(index)}
             />
      ))}
           
        </div>
    )
}