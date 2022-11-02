import React, {useContext} from "react"
import { Link } from 'react-router-dom'
import { picsContext } from '../context'

function Header() {
  const {cartItems} = useContext(picsContext)

  function cartItemsCount() {
    if(cartItems.length !== 0) {
      return cartItems.length
    }
  }

  return (
    <header>
      <h2><Link to='/'>Pic Some</Link></h2>
      <Link to="/cart" className="cart-link">
        <i className={`ri-shopping-cart-${!cartItems.length ? 'line' : 'fill'} ri-fw ri-2x`}></i>
        <i className="cart-count">{cartItemsCount()}</i>
      </Link>
    </header>
  )
}

export default Header
