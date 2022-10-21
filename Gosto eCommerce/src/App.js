import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/fetchers";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './assets/styles/App.sass';
import ErrorPage from "./pages/ErrorPage";

function App() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.login)

  useEffect(() => {
    dispatch(getProducts())
  })

  return (
    <>
      <div className="p-sticky">
        {!isLoggedIn &&
          <p className="login-alert text-center py-2">
            Please Login firstly to you can make an order, add to favorite or add to cart. 
            <Link to="/login"> Login</Link>
          </p>}
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
