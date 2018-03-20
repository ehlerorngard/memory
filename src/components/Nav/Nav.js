import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar p-4">
    <div className="container-fluid">
        <div className="ontheleft">
          <a href="/">
            Memory
          </a>
        </div>
        <div className="inthemiddle">status updater goes here</div>
        <div className="ontheright">
          <div>total points: HERE</div>
          <div>|</div>
          <div>top score: HERE</div>
        </div>
      </div>

  </nav>
);

export default Nav;
