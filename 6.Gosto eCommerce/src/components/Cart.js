import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import './Cart.sass';


function Cart() {
  const { items, totalCost } = useSelector(state => state.cart)
  const { isLoggedIn } = useSelector(state => state.login)
  const dispatch = useDispatch()

  return (
    <div className="cart p-4 m-2">
      { items.length > 0 && isLoggedIn  ?
        <div className="cart__items">
          <header className="d-flex justify-content-between mb-4">
            <h4>Photo</h4>
            <p className="text-gray pb-2">Product Details</p>
          </header>
          {items.map(item => (
            <div className="item d-flex align-items-center mb-3">
              <img src={item.images[0]} alt="product-img" className="me-4"/>
              <div className="details text-gray me-4">
                <p className="mb-2">{item.title}</p>
                <p className="mb-2">Price: ${item.total}</p>
                <p className="mb-2">Quantity: {item.quantity}</p>
              </div>
              <button className="pointer ms-auto" onClick={() => dispatch(removeFromCart(item))}><FontAwesomeIcon icon={faTrashCan} size="2x" /></button>
            </div>
          ))}
        </div> :
        <div className="cart__empty d-flex justify-content-between align-items-center">
        <p className="text-gray">Your cart is empty</p>
        <img src={require('../assets/images/cart.png')} alt="empty-cart" />
      </div>
      }
      <p className="total-price mt-3">Total Cost: ${isLoggedIn ? totalCost : 0}</p>
    </div>

  );
}

export default Cart;
