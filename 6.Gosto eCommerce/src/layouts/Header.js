import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBarChart, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faArrowRightFromBracket, faHeart as faHeartFill } from "@fortawesome/free-solid-svg-icons";
import './Header.sass';
import MainButton from "../components/MainButton";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import Favorite from "../components/Favorite";

function Header() {
  const navItems = ['home', 'shop', 'about', 'blogs', 'contact']
  const [showedCart, setShowCart] = useState(false)
  const [showedFav, setShowFav] = useState(false)
  const [navExpanded, setNavExpanded] = useState(false)
  const { favoriteItems } = useSelector(state => state.favorite)
  const { isLoggedIn, userName } = useSelector(state => state.login)
  const { items } = useSelector(state => state.cart)

  function navTogglerHandeler() {
    setNavExpanded(!navExpanded)
  }

  function showCart() {
    if (showedFav) {
      setShowFav(false)
    }
    setShowCart(!showedCart)
  }

  function showFavorite() {
    if (showedCart) {
      setShowCart(false)
    }
    setShowFav(!showedFav)
  }

  return (
    <header className="header py-3">
      <Container fluid >
        <div className="d-flex align-items-center">
          <button className="navbar__toggler me-4 text-main-color" aria-controls="navba-nav" onClick={navTogglerHandeler}>
            <FontAwesomeIcon icon={!navExpanded ? faBarChart : faWindowClose} size='2x' className="pointer" />
          </button>
          <Link to='/'>
            <img src={require('../assets/images/logo.svg').default} alt='logo' className="header__logo" />
          </Link>

          <nav className="navbar">
            <ul className='navbar__nav mx-sm-3 d-flex' id="navba-nav" data-expanded={navExpanded}>
              {navItems.map((nav, index) => (
                <li key={index} className={`nav-item ${nav === 'home' ? 'active' : ''}`}>
                  <Link to={`${nav}`} className="nav-link text-black">{nav}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__user ms-auto d-flex align-items-center">

            <div className="user-control">
              <div className="text-center me-2">
                <Link to="/login">
                  <FontAwesomeIcon icon={isLoggedIn ? faArrowRightFromBracket : faUser} size='lg' className="mb-1" />
                  <p>{isLoggedIn ? userName.split(' ')[0] : 'Login'}</p>
                </Link>
              </div>
              <div className="text-center me-2 pointer" onClick={showFavorite}>
                <FontAwesomeIcon icon={favoriteItems.length ? faHeartFill : faHeart} size='lg' className="mb-1" />
                <p>Favorite</p>
              </div>
            </div>

            <MainButton className="cart-btn" onClick={showCart}>
              <FontAwesomeIcon icon={faCartShopping} size='lg' className="me-2" />
              ({isLoggedIn ? items.length : 0})
            </MainButton>
            {showedCart && <Cart />}
            {showedFav && <Favorite />}
          </div>
        </div>
      </Container>
    </header>


  );
}

export default Header;
