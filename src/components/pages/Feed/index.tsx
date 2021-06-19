import React from "react";
import Posts from "./Posts";
import ProfileSideBar from "./ProfileSideBar";

function Feed() {
  return (
    <section className="feed">
      <Posts />
      <ProfileSideBar />
    </section>
  );
}

export default Feed;
