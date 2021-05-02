import React from "react";
import { Col, Row } from "react-bootstrap";
import { Products } from "../products";
import Product from "./../components/Product";
const Homepage = () => {
  return (
    <>
      <h1>latest product</h1>
      <Row>
        {Products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
