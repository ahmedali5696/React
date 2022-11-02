import React from "react";
import './CategoriesCard.sass';


function CategoriesCard({ category, itemsCount }) {

  return (
    <div className="categories__card d-flex align-items-center">
      <img src={require('../assets/images/cate-h11_2.png')} alt="cate-logo" className="me-3" />
      <div className="card-details">
        <h5>{category}</h5>
        <p>{itemsCount} Items</p>
      </div>
    </div>

  );
}

export default CategoriesCard;
