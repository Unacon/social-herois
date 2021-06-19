export interface User {}

export interface LoginState {
  status: "idle" | "loading" | "success" | "error";
  user: User;
  error: string;
}
