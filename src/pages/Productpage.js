import React, { useState, useEffect } from "react";
import { Products } from "./../products";
import Rating from "./../components/Rating";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";
const Productpage = (props) => {
  // console.log(props);
  // const product = Products.find((p) => p.id === props.match.params.id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getproducts = async () => {
      const { data } = await axios.get(
        `/api/products/${props.match.params.id}`
      );
      // const { data } = await axios.get("api/products/3");
      setProduct(data);
      console.log(data, "data1");
      console.log("13", props.match.params.id);
    };
    getproducts();
  }, []);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Pricee:${product.price}</ListGroup.Item>
            <ListGroup.Item>Description:${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>status:</Col>
                <Col>
                  <strong>
                    {product.countinstocks > 0 ? "In Stock" : "Out of Stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countinstocks === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Productpage;
