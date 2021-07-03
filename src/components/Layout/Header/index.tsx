import React from "react";
import { useAppSelect } from "../../../redux/configureStore";

import FacebookLogo from "../../../assets/img/facebook-logo.svg";
import { useDispatch } from "react-redux";
import { getGithubUserClear } from "../../../redux/reducers/loginReducer/index";

function Header() {
  const dispatch = useDispatch();
  const user = useAppSelect((state) => state.Login.user);

  function handleLogout() {
    dispatch(getGithubUserClear());
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={FacebookLogo} alt="facebook Logo" />
      </div>
      {user && (
        <div className="logout">
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
