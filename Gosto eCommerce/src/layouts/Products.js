import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductsCard from "../components/ProductsCard";
import Spinner from "../components/Spinner";
import './Products.sass';


function Products() {
  const { products, isLoading, error } = useSelector(state => state.products)

  return (
    <section className="products px-3">

      <Container fluid>
        <header className="products__header text-center mb-4">
          <h2 className="mb-2">All Products</h2>
          <p className="text-gray">Get Fast Shipping on Your Orders. Low prices. Pay in installments.</p>
        </header>

        {isLoading ?
          <Spinner /> :
          <div className="products__group mb-5">
            {!error ?
              products.map(prod =>
                <ProductsCard
                  key={prod.id}
                  product={prod}
                />) :
                  <p className="text-center text-gray">sorry, problem in the server and try again</p>}

                </div>}

          </Container>
    </section>
  );
}

export default Products;
