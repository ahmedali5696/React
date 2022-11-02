import React from "react";
import Categories from "../layouts/Categories";
import Main from "../layouts/Main";
import Products from "../layouts/Products";
import './Home.sass';


function Home() {

  return (
    <>
      <Main/>
      <Categories/>
      <Products/>
    </>
    
  );
}

export default Home;
