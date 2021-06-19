import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <div className="posts">
      <div className="container">
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Posts;
