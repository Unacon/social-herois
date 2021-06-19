import React from "react";
import PostAction from "./PostAction";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostSendCommentForm from "./PostSendCommentForm";

function Post() {
  return (
    <div className="post">
      <PostHeader />
      <PostContent />
      <PostImage />
      <PostAction />
      <PostComments />
      <PostSendCommentForm />
    </div>
  );
}

export default Post;
