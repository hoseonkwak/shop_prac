import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let CustomBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();

  console.log(parseInt(id) + 1);
  return (
    <Container>
      {/* <CustomBtn bg="blue">button</CustomBtn>
      <CustomBtn bg="yellow">button</CustomBtn> */}
      <Row>
        <Col>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            alt="신발"
            width="80%"
          />
        </Col>
        <Col>
          <h4>{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
