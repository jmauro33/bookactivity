import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, width: 1050,  clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
