import React from "react";

import { ReactComponent as Like } from "../../../../../../assets/img/like.svg";
import { ReactComponent as Comment } from "../../../../../../assets/img/comment.svg";

type PostActionType = {
  likes: number;
  comment: Array<Object>;
};

function PostAction(props: PostActionType) {
  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <Like />
        <span>{props.likes} Likes</span>
      </div>
      <div className="post-comment-icon commented">
        <Comment />
        <span>{props.comment.length} Comment</span>
      </div>
    </div>
  );
}

export default PostAction;
