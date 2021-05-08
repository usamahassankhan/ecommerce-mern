import React, { useState, useEffect } from "react";
// import { Products } from "./../products";
import Rating from "./../components/Rating";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProductDetails } from "./../actions/productActions";
import Loader from "./../components/loader";
import Message from "./../components/message";

const Productpage = (props) => {
  const dispatch = useDispatch();

  // console.log(props);
  // const product = Products.find((p) => p.id === props.match.params.id);
  console.log(props, "pr");
  // const [product, setProduct] = useState({});
  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id));
  }, [props, dispatch]);

  const productDetails = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);
  console.log(product);
  console.log(product.countInStock, "sasa");
  // useEffect(() => {
  //   const getproducts = async () => {
  //     const { data } = await axios.get(
  //       `/api/products/${props.match.params.id}`
  //     );
  //     // const { data } = await axios.get("api/products/3");
  //     setProduct(data);
  //     console.log(data, "data1");
  //     console.log("13", props.match.params.id);
  //   };
  //   getproducts();
  // }, []);
  const addToCartHandler = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
              <ListGroup.Item>
                Description:${product.description}
              </ListGroup.Item>
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
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Productpage;
