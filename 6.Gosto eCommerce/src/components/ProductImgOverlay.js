import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './ProductImgOverlay.sass';


function ProductImgOverlay({img, action}) {

  return (
    <div className="overlay-product-img">
      <div className="img-container">
        <img src={img} alt='product-img' />
        <span onClick={action}>
          <FontAwesomeIcon icon={faClose} className="close-icon pointer" />
        </span>
      </div>
    </div>

  );
}

export default ProductImgOverlay;
