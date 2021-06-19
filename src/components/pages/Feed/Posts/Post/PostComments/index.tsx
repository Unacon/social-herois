import React from "react";

import SpiderManProfile from "../../../../../../assets/img/spider-man.png";
function PostComments() {
  return (
    <div className="post-comments">
      <div className="comment">
        <div className="comment-profile-image">
          <div className="comment-image-board">
            <img src={SpiderManProfile} alt="spider-man" />
          </div>
        </div>
        <div className="comment-content">
          <div className="comment-profile-name">Spider-Man</div>
          <div className="comment-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            voluptatibus in temporibus expedita consequatur et impedit omnis
            quos. Dolorum a doloribus nemo voluptatum eaque aperiam illo quia
            tempore blanditiis molestiae!
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComments;
