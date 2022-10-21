import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faSearch, faHeart as faHeartFill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import ProductImgOverlay from "./ProductImgOverlay"
import { addRemoveFavorite } from '../redux/favoriteSlice'
import { toggleItemFavorite } from '../redux/productsSlice'
import './ProductsCard.sass';


function ProductsCard({ product }) {
  const dispatch = useDispatch()
  const [showedImg, setShowImg] = useState(false)
  const { isLoggedIn } = useSelector(state => state.login)

  function addCart() {
    if (isLoggedIn) {
      dispatch(addToCart(product))
    }
  }

  function favoritList() {
    if (isLoggedIn) {
      dispatch(toggleItemFavorite(product))
      dispatch(addRemoveFavorite(product))
    }
  }


  return (
    <div className='products__card'>

      <header className="card-header">
        <img src={product.images[2]} alt='product-img' className="mb-2" />
        <div className="user-actions d-flex justify-content-center align-items-center">
          <span onClick={addCart}>
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
          <span onClick={favoritList}>
            <FontAwesomeIcon icon={product.isFavorite ? faHeartFill : faHeart} />
          </span>
          <span onClick={()=> setShowImg(!showedImg)}><FontAwesomeIcon icon={faSearch} /></span>
        </div>
      </header>

      <Link to={`/product/${product.id}`}>
        <h4 className="mb-2">{product.title}</h4>
        <p className="text-gray">{product.desc}</p>
        <p>${product.price}</p>
      </Link>
      
      {showedImg && <ProductImgOverlay img={product.thumbnail} action={()=> setShowImg(!showedImg)} />}
    </div>
  );
}

export default ProductsCard;
