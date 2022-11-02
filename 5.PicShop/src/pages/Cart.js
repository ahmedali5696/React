import React, { useContext, useState } from "react"
import { picsContext } from '../context'
import CartItem from "../components/CartItem"

function Cart() {
  const [buttonText, setButtonText] = useState('Place order')
  const { cartItems, emptyCart } = useContext(picsContext)
  const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", { style: "currency", currency: "USD" })

  const itemsUI = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setButtonText('Ordering...')
    setTimeout(() => {
      console.log("Order placed!")
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {itemsUI}
      <p className="total-cost">Total: {totalCost}</p>
      <div className="order-button">
        {
          cartItems.length > 0 ?
            <button onClick={placeOrder}>{buttonText}</button> :
            <p>You have no items in your cart.</p>
        }
      </div>
    </main>
  )
}

export default Cart