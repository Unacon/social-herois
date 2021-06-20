import React from "react";
import { Redirect } from "react-router-dom";
import { PATHS } from "../../../config/paths";
import { useAppSelect } from "../../../redux/configureStore";

import FacebookLogo from "../../../assets/img/facebook-logo.svg";

function Header() {
  const user = useAppSelect((state) => state.Login.user);

  function handleLogout() {
    return <Redirect to={PATHS.LOGIN} />;
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
