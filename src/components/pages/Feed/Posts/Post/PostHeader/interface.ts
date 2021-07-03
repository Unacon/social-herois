import { Post } from "../../../../../../redux/reducers/postReducer/interfaceHeroes";

export interface PostHeaderProps {
  name: Post["author"]["name"];
  image: Post["author"]["image"];
  date: Post["post"]["date"];
}
