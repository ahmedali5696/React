import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CategoriesCard from "../components/CategoriesCard";
import Spinner from "../components/Spinner"
import './Categories.sass';


function Categories() {
  const { products, isLoading } = useSelector(state => state.products)
  const allCategories = products.map(prod => prod.category).slice(0, 7)

  return (
    <section className="categories pb-5">
      <Container fluid>
        <div className="categories__group">
          { !isLoading ? 
            allCategories.map((cate, index) => <CategoriesCard key={index} category={cate} itemsCount={index} />): 
            <Spinner />
            }
        </div>
      </Container>
    </section>

  );
}

export default Categories;
