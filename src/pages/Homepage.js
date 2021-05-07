import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import { Products } from "../products";
import axios from "axios";
import Product from "./../components/Product";
const Homepage = () => {
  const [Products, setProducts] = useState();
  console.log(Products, "dsadasa");
  useEffect(() => {
    const getproducts1 = async () => {
      const { data } = await axios.get("api/products");
      setProducts(data);
      console.log(data);
    };
    getproducts1();
  }, []);
  return (
    <>
      <h1>latest product</h1>
      <Row>
        {Products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
