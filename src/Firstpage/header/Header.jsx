import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="d-flex justify-content-between container">
      <p className="logo-name">
        <span className="logo-name-l">l</span>
        <span>
          <img src="heart.png" alt="logo" className="logo"/>
        </span>
        <span className="logo-name-yal">yalbaze</span> 
      </p>

      <button className="priority-access">
        <span className="priority-access1">Get Priority Access</span>{" "}
      </button>
    </div>
  );
}

export default Header;
