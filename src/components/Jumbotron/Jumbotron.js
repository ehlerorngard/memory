import React from "react";
import "./Jumbotron.css";


const Jumbotron = ({ children }) => (
  <div className="jumbotron">
  	<div className="row">
  		<div className="col-md-6 col-xs-12">
	    {children}
  		</div>
  		<div className="lead col-md-6 col-xs-12">Click images to earn points, but don't click the same image more than once!
  		</div>
  	</div>
  </div>
);

export default Jumbotron;
