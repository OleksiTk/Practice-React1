import { useState } from "react";
import "./PostItem.jsx";
import "./Post.css";
import PostItem from "./PostItem.jsx";
const Posts = function ({ posts, title, remove }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        {posts.map((post, index) => (
          <PostItem
            number={index + 1}
            remove={remove}
            post={post}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
