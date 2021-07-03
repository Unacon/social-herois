import React from "react";
import Typing from "./Typing";

import { useAppSelect } from "../../../../../redux/configureStore";

function ProfileInfo() {
  const user = useAppSelect((state) => state.Login.user);
  const istyping = useAppSelect((state) => state.UI.isTyping);

  return (
    <>
      <div className="profile-image">
        {istyping && <Typing />}
        <div className="image-board">
          <img src={user.image} alt="SuperMan profile" />
        </div>
      </div>
      <div className="profile-name">
        <span>{user.name}</span>
      </div>
      <div className="profile-stats">
        <div>
          <span>{user.followers}</span>
          <span>Followers</span>
        </div>
        <div>
          <span>{user.following}</span>
          <span>Following</span>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
