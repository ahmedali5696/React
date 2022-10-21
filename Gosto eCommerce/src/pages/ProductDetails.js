import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import './ProductDetails.sass';


function ProductDetails() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.login)
  const {productId} = useParams()
  const {products} = useSelector(state => state.products)
  const { items } = useSelector(state => state.cart)
  const selectedProduct = items.find(item => item.id == productId) || products.find(item => item.id == productId)

  function addCart() {
    if (isLoggedIn) {
      dispatch(addToCart(selectedProduct))
    }
  }  

  function removeCart() {
    if (isLoggedIn) {
      dispatch(removeFromCart(selectedProduct))
    }
  }

  return (
    <section className="product-page px-3 py-5">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col sm={12} md={6} className="pe-md-4 mb-3">
              <img src={selectedProduct.images[0]} alt="product-img" className="product-img"/>
          </Col>
          <Col sm={12} md={6} className="ps-md-4">
            <div className="details">
              <h2 className="mb-5">{selectedProduct.title}</h2>
              <h4 className="mb-3">${selectedProduct.price}</h4>
              <div className="add-to-cart d-flex mb-5">
                <div className="counter d-flex p-2 me-4">
                  <button className="mx-2 pointer" onClick={addCart} >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <p className=" mx-2">{selectedProduct.quantity}</p>
                  <button className="mx-2 pointer" onClick={removeCart} >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
                <button className="add-btn pointer" onClick={addCart} >Add To Cart</button>
              </div>
              <h4 className="mb-3">Product Description</h4>
              <p className="mb-3">{selectedProduct.description}</p>
              <p>Rating: {selectedProduct.rating}</p>
              <p>Stock: {selectedProduct.stock}</p>
              <p>Brand: {selectedProduct.brand}</p>
            </div>
          </Col>
        </Row>

      </Container>
    </section>

  );
}

export default ProductDetails;
