import React from "react";
import { Redirect } from "react-router-dom";
import { PATHS } from "../../../config/paths";
import { useAppSelect } from "../../../redux/configureStore";

import Posts from "./Posts";
import ProfileSideBar from "./ProfileSideBar";

function Feed() {
  const user = useAppSelect((state) => state.Login.user);

  if (!user) {
    return <Redirect to={PATHS.LOGIN} />;
  }
  return (
    <section className="feed">
      <Posts />
      <ProfileSideBar />
    </section>
  );
}

export default Feed;
