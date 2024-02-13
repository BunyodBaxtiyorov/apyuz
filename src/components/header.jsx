import React from "react";
import "./css/main.css";
import defaultw from "./img/default.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="Header">
            <div className="header-h1">
              <h1>ApYuz</h1>
            </div>
            <input type="search" placeholder="Search APIs" />
            <nav>
              <ul>
                <li>
                  <a href="#">Create Team</a>
                </li>
                <li>
                  <a href="#">Add Your Api</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Log In</a>
                </li>
              </ul>
              <button>Sign Up</button>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-between">
        <h1>Welcome to the Rapid API Hub</h1>
        <h1>Discover and connect to thousands of APIs</h1>
      </div>
    </>
  );
};

export default Header;
