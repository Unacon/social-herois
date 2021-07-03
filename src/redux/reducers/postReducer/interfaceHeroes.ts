export interface Author {
  id: number;
  name: string;
  image: string;
}

export interface Comment {
  id: string;
  image: string;
  name: string;
  comment: string;
}

export interface Post {
  id: string;
  author: Author;
  post: {
    date: number;
    content: string;
    image: string;
    likes: number;
    comments: Array<Comment>;
  };
}

export interface PostState {
  status: "idle" | "loading" | "success" | "error";
  posts: Post[];
}
