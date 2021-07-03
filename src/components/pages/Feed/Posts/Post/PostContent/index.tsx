import React from "react";

type PostContentType = {
  content: string;
};

function PostContent(props: PostContentType) {
  return <div className="post-content">{props.content}</div>;
}

export default PostContent;
