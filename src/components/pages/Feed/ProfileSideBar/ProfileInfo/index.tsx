import React from "react";
import Typing from "./Typing";

import SuperManProfile from "../../../../../assets/img/super-man.jpg";

function ProfileInfo() {
  return (
    <div className="profile-image">
      <Typing />
      <div className="image-board">
        <img src={SuperManProfile} alt="SuperMan profile" />
      </div>
    </div>
  );
}

export default ProfileInfo;
