export interface User {
  id: number;
  image: string;
  name: string;
  followers: number;
  following: number;
  message: string;
}

export interface LoginState {
  status: "idle" | "loading" | "success" | "error";
  user: User;
  error: string;
}
