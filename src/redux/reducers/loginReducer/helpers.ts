import { User } from "./interfaceHeroes";

export function parseUser(githuUser: any): User {
  return {
    id: githuUser.id,
    name: githuUser.login,
    image: githuUser.avatar_url,
    followers: githuUser.followers,
    following: githuUser.following,
    message: githuUser.message,
  };
}
