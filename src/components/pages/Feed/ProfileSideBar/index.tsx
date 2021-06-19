import React from "react";
import ProfileInfo from "./ProfileInfo";

function ProfileSideBar() {
  return (
    <div className="profile">
      <ProfileInfo />
      <div className="profile-name">
        <span>Batman</span>
      </div>
      <div className="profile-stats">
        <div>
          <span>999+</span>
          <span>Followers</span>
        </div>
        <div>
          <span>5</span>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
