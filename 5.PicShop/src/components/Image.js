import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import { picsContext } from '../context'
import useHover from "../hooks/useHover"

function Image({ className, img }) {
  const [hovered, ref] = useHover()
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(picsContext)

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else {
        return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }

  return (
    <div
      className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="" />
        <i
          onClick={() => toggleFavorite(img.id)}
          className={`ri-heart-${img.isFavorite ? 'fill' : 'line'} favorite`}>
        </i>
        {cartIcon()}

    </div>
  )
}

Image.propType = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image
