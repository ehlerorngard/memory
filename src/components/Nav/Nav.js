import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar p-4">
    <div className="container-fluid">
        <div className="ontheleft">
          <a href="/">
            Memory
          </a>
        </div>
        <div className="inthemiddle">{props.message}</div>
        <div className="ontheright">
          <div>total points: {props.points}</div>
          <div>|</div>
          <div>top score: {props.topScore}</div>
        </div>
      </div>

  </nav>
);

export default Nav;
