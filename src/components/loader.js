import React from "react";
import { Spinner } from "react-bootstrap";
const loader = () => {
  return (
    <div>
      <Spinner
        role="status"
        animation="border"
        style={{ width: "100px", margin: "auto", display: "block" }}
      >
        <span>Loading</span>
      </Spinner>
    </div>
  );
};

export default loader;
