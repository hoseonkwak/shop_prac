import React from "react";
import { Col } from "react-bootstrap";

function Card(props) {
  return (
    <Col>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        alt="신발"
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  );
}

export default Card;
