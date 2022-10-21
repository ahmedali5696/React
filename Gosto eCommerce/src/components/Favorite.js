import React from "react";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addRemoveFavorite } from '../redux/favoriteSlice'
import { toggleItemFavorite } from '../redux/productsSlice'
import './Favorite.sass';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Favorite() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.login)
  const { favoriteItems } = useSelector(state => state.favorite)

  function favoritList(product) {
    if (isLoggedIn) {
      dispatch(toggleItemFavorite(product))
      dispatch(addRemoveFavorite(product))
    }
  }

  return (
    <div className="favorit p-4 m-2">
      {favoriteItems.length > 0 && isLoggedIn ?
        <div className="favorit__items">
          <header className="d-flex justify-content-between mb-4">
            <h4>Photo</h4>
            <p className="text-gray pb-2">name</p>
          </header>
          {favoriteItems.map(item =>
            <div className="item d-flex align-items-center mb-3">
              <img src={item.images[0]} alt="product-img" className="me-4" />
              <div className="details text-gray me-4">
                <Link to={`/product/${item.id}`}>
                  <p className="mb-2">{item.title}</p>
                </Link>
              </div>
              <button className="pointer ms-auto">
                <FontAwesomeIcon icon={faTrashCan} size="2x" onClick={() => favoritList(item)} />
              </button>
            </div>
          )}
        </div> :
        <div className="favorit__empty d-flex justify-content-between align-items-center">
          <p className="text-gray">Your favorit list is empty</p>
        </div>}
    </div>

  );
}

export default Favorite;
