import React from "react";

import FacebookLogo from "../../../assets/img/facebook-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={FacebookLogo} alt="facebook Logo" />
      </div>
      <div className="logout">
        <button className="button">Logout</button>
      </div>
    </header>
  );
}

export default Header;
