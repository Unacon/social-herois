import React from "react";
import { useAppDispatch, useAppSelect } from "../../../../redux/configureStore";
import { getPostApi } from "../../../../redux/reducers/postReducer";
import Post from "./Post";

function Posts() {
  const dispatch = useAppDispatch();
  const postsState = useAppSelect((state) => state.Post);

  React.useEffect(() => {
    dispatch(getPostApi());
  }, [dispatch]);

  return (
    <div className="posts">
      <div className="container">
        {postsState.status === "loading" && <h1>Carregando...</h1>}
        {postsState.status === "error" && <h1>Error...</h1>}

        {postsState.posts.map((post) => {
          return <Post posts={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
