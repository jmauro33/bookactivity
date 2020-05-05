import React from "react";
import "./style.css";


function SavedBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      Save 
    </span>
  );
}

export default SavedBtn;
