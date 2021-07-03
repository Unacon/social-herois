import React from "react";
import { PostProps } from "./interface";
import PostAction from "./PostAction";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostSendCommentForm from "./PostSendCommentForm";

function Post(props: PostProps) {
  console.log({ props });
  return (
    <div className="post">
      <PostHeader
        name={props.posts.author.name}
        image={props.posts.author.image}
        date={props.posts.post.date}
      />
      <PostContent content={props.posts.post.content} />
      <PostImage image={props.posts.post.image} />
      <PostAction
        likes={props.posts.post.likes}
        comment={props.posts.post.comments}
      />
      <PostComments comments={props.posts.post.comments} />
      <PostSendCommentForm post={props.posts} />
    </div>
  );
}

export default Post;
