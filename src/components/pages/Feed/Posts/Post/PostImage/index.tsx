import React from "react";

type PostImageType = {
  image: string;
};

function PostImage(props: PostImageType) {
  return (
    <div className="post-image">
      <div className="post-image-board">
        <img src={props.image} alt="Batman imagem" />
      </div>
    </div>
  );
}

export default PostImage;
