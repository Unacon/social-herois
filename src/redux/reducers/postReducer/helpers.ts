import { Post, PostState } from "./interfaceHeroes";

export function parseUser(githuUser: any) {
  return {
    id: githuUser.id,
    name: githuUser.login,
    image: githuUser.avatar_url,
    followers: githuUser.followers,
    following: githuUser.following,
    message: githuUser.message,
  };
}

export function replacePost(state: PostState, action): Post[] {
  const newPosts = state.posts.map((post) => {
    if (post.id === action.payload.post.id) {
      return action.payload.post;
    }
    return post;
  });
  return newPosts;
}
