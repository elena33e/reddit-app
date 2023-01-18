import React from "react";
import Avatar from '../Avatar/avatar';
import './comment.css'
import moment from "moment";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Comment(props){
    const {comment} = props;

    return(
        <div className="comment">
      <div className="comment-metadata">
        <Avatar name={comment.author} />
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <ReactMarkdown source={comment.body} />
    </div>
    );

}