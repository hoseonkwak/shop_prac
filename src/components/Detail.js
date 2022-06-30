import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Detail() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={`https://codingapple1.github.io/shop/shoes1.jpg`}
            alt="신발"
            width="80%"
          />
        </Col>
        <Col>
          <h4>상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
