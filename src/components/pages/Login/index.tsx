import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { ReactComponent as GitHubLogo } from "../../../assets/img/github-logo.svg";
import { PATHS } from "../../../config/paths";
import { useAppSelect } from "../../../redux/configureStore";
import { getGithubUserApi } from "../../../redux/reducers/loginReducer/index";

function Login() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = React.useState("");

  const loginState = useAppSelect((state) => state.Login);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputText(value);
  }

  function handleClick(event: React.FormEvent) {
    event.preventDefault();
    dispatch(getGithubUserApi(inputText));
  }

  if (loginState.status === "success") {
    return <Redirect to={PATHS.FEED} />;
  }

  return (
    <section className="login">
      <div className="login-box">
        <div className="github-logo">
          <GitHubLogo />
        </div>

        {loginState.status === "loading" && <span>Carregando</span>}
        {loginState.status === "error" && (
          <label style={{ color: "red" }} htmlFor={"github-input"}>
            {loginState.error}
          </label>
        )}
        <form onSubmit={handleClick}>
          <input
            type="text"
            id="github-input"
            className="github-input"
            placeholder="Type your GitHub user"
            onChange={handleChange}
            value={inputText}
          ></input>
          <button className="github-button" type="submit" disabled={!inputText}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
