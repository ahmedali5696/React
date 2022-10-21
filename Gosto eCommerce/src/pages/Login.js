import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, logOut } from "../redux/loginSlice";
import './Login.sass';


function Login() {
  const dispatch = useDispatch()
  const nameInputRef = useRef(null)
  const navigate = useNavigate()
  const { isLoggedIn, userName } = useSelector(state => state.login)

  function loginHandeler(e) {
    e.preventDefault()
    const inputValue = nameInputRef.current.value
    if (inputValue !== '') {
      dispatch(logIn(inputValue))
      navigate(-1)
    }
  }

  function logoutHandeler(e) {
    e.preventDefault()
    dispatch(logOut())
  }

  const logBtn = !isLoggedIn ?
    <button className="main-btn pointer" onClick={loginHandeler}>Login</button> :
    <button className="main-btn pointer" onClick={logoutHandeler}>Logout</button>

  return (
    <section className="login d-flex align-items-center">
      <form className="login__form mx-auto">
        <img src={require('../assets/images/logo.svg').default} alt="logo" className="login__logo d-block mx-auto mb-5" />
        {!isLoggedIn ?
          <div className="input-group d-flex mx-auto mb-4">
            <label>Your Name</label>
            <input ref={nameInputRef} type="text" name="fullname" placeholder="Enter Your Name" className="login__name" />
          </div> :
          <p className="text-center mb-4">{userName}</p>}
        {logBtn}

      </form>

    </section>

  );
}

export default Login;
