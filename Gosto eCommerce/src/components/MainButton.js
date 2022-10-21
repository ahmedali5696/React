import React from "react";
import './MainButton.sass';


function MainButton({ children, className, onClick }) {

  return (
    <button className={`main-btn pointer ${className}`} onClick={onClick}>
      {children}
    </button>

  );
}

export default MainButton;
