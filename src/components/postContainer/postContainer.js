import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './postContainer.css';
import moment from 'moment';
import Comment from '../Comment/comment';
import Skeleton from "react-loading-skeleton";
import { FaComment, 
         FaThumbsDown,
         FaThumbsUp,
         FaRegThumbsUp, 
         FaRegThumbsDown } from "react-icons/fa";
import shortenNumber from '../../utils/shortenNumber'


export default function PostContainer (props){

    const {post, onToggleComments} = props;
    const [voteValue, setVoteValue] = useState(0);

    //Handling the comments here

    const renderComments = () => {
        if (post.errorComments) {
          return (
            <div>
              <h3>Error loading comments</h3>
            </div>
          );
        }
    
        if (post.loadingComments) {
          return (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          );
        }
    
        if (post.showingComments) {
          return (
            <div>
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          );
        }
    
        return null;
      };

      //Handling vote buttons

      const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
          setVoteValue(0);
        } else if (newValue === 1) {
          setVoteValue(1);
        } else {
          setVoteValue(-1);
        }
      };
    
      const renderUpVote = () => {
        if (voteValue === 1) {
          return <FaThumbsUp className="icon-action feedback-icon" />;
        }
        return <FaRegThumbsUp className="icon-action feedback-icon" />;
      };
    
      const renderDownVote = () => {
        if (voteValue === -1) {
          return <FaThumbsDown className="icon-action feedback-icon" />;
        }
        return <FaRegThumbsDown className="icon-action feedback-icon" />;
      };
    
      const getVoteType = () => {
        if (voteValue === 1) {
          return 'up-vote';
        }
        if (voteValue === -1) {
          return 'down-vote';
        }
    
        return '';
      };
    


    return(
        <div className="post-box" key={post.id}>
            <div className="post-content">
                <img className="post-image" src={post.url}/>
                <div className="post-description">
                    <h2 className="post-title">{post.title}</h2>
                    <div className="post-text">
                        <p>{post.details}</p>
                    </div>
                </div>
            </div>

            <div className="author-info">
                <img className="author-img" src="https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"/>
                <div className="author-post-info">
                    <p>Posted by <NavLink to='/otherUserProfile'>{post.author}</NavLink></p>
                    <h4>Posted on {moment.unix(post.created_utc).fromNow()}</h4>
                </div>
            </div>

            <div className="feedback-box">
                <div className="left">

                <button
              type="button"
              className={`icon-action-button up-vote ${
                voteValue === 1 && 'active'
              }`}
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>

            <p className={`post-votes-value ${getVoteType()}`}>
              {shortenNumber(post.ups, 1)}
            </p>

            <button
              type="button"
              className={`icon-action-button down-vote ${
                voteValue === -1 && 'active'
              }`}
              onClick={() => onHandleVote(-1)}
              aria-label="Down vote"
            >
              {renderDownVote()}
            </button>

                </div>
                <div className="right">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && 'showing-comments'
                  }`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  <FaComment className="icon-action feedback-icon" />
                </button>
                {shortenNumber(post.num_comments, 1)}
              
                </div>
             
            </div>
            {renderComments()}
        </div>
    );
}