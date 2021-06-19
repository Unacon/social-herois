import React from "react";

import { ReactComponent as Like } from "../../../../../../assets/img/like.svg";
import { ReactComponent as Comment } from "../../../../../../assets/img/comment.svg";
function PostAction() {
  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <Like />
        <span>33 Likes</span>
      </div>
      <div className="post-comment-icon commented">
        <Comment />
        <span>1 Comment</span>
      </div>
    </div>
  );
}

export default PostAction;
