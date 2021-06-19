import React from "react";

import BatmanPost from "../../../../../../assets/img/batman-post.jpg";

function PostImage() {
  return (
    <div className="post-image">
      <div className="post-image-board">
        <img src={BatmanPost} alt="Batman imagem" />
      </div>
    </div>
  );
}

export default PostImage;
