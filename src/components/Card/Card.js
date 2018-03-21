import React from "react";
import "./Card.css";

export const Card = props => (
  <div className={["c".concat(props.value), "card"].join(" ")}>
    {props.children}
  </div>
);
