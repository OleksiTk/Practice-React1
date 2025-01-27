import { useState } from "react";
import "./post.css";
const PostItem = function (props) {
  return (
    <div className="wrapper">
      <div className="post">
        <div className="post__content">
          <h2 className="post__title">
            {props.number}. {props.post.title}
          </h2>
          <p className="post__description">{props.post.body}</p>
        </div>
        <div className="post__buttons">
          <button
            onClick={() => props.remove(props.post)}
            className="post__button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
