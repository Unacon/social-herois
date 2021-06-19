import React from "react";

import BatmanProfile from "../../../../../../assets/img/batman-profile.png";
function PostHeader() {
  return (
    <div className="post-header">
      <div className="post-header-image-board">
        <img src={BatmanProfile} alt="batman" />
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">Batman</div>
        <div className="post-date">15/06/2021 21:38</div>
      </div>
    </div>
  );
}

export default PostHeader;
