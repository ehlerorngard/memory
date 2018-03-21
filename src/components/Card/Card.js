import React from "react";
import "./Card.css";

export const Card = props => (
  <div 
	onClick={props.onClick}
	value={props.value}
	className={["c".concat(props.value), "card"].join(" ")}>
    {props.children}
  </div>
);
