import React, { useContext, useState } from "react"
import { picsContext } from '../context'
import useHover from "../hooks/useHover"

function CartItem({ item }) {
  const { removeFromCart } = useContext(picsContext)
  const [hovered, ref] = useHover()

  return (
    <div className="cart-item">
      <i className={`ri-delete-bin-${hovered ? 'fill' : 'line'}`} onClick={() => removeFromCart(item.id)}
      ref={ref} ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem