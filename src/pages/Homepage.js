import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import { Products } from "../products";
import axios from "axios";
import Product from "./../components/Product";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/loader";
import Message from "./../components/message";
const Homepage = () => {
  const dispatch = useDispatch();
  // const [Products, setProducts] = useState();
  // console.log(Products, "dsadasa");
  // useEffect(() => {
  //   const getproducts1 = async () => {
  //     const { data } = await axios.get("api/products");
  //     setProducts(data);
  //     console.log(data);
  //   };
  //   getproducts1();
  // }, []);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  return (
    <>
      <h1>latest product</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        // <h3>{error}</h3>
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homepage;
