import React from "react";
import { Container } from "react-bootstrap";
import './Main.sass';
import Search from "../components/Search";


function Main() {

  return (
    <main className="main mx-auto text-center d-flex align-items-center justify-content-center">
      <Container fluid>
        <h1 className="mb-4">Gosto <span className="text-main-color">offers</span> you love about,<br />  <span className="text-main-color">Souq and more.</span> Shop now. Pay </h1>
        <p className="mb-4 text-gray">Order All You Need and We Deliver It to You. Contactless Delivery. Doorstep Delivery.</p>
        <Search />
        <p className="text-gray mt-2">Examples: T-Shirt, clothis, wears, Image…</p>
      </Container>
    </main>

  );
}

export default Main;
