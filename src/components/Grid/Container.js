import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`} style={{"justifyContent": "center", "marginTop": "-20px"}}>
    {children}
  </div>
);
