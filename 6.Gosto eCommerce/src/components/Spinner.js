import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function Spinner() {

  return (
    <div className="spinner text-center py-5">
      <FontAwesomeIcon icon={faSpinner} size="3x"/>
    </div>
    
  );
}

export default Spinner;
