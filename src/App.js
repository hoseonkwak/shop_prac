import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  let [shoes] = useState([
    {
      id: 0,
      title: "White and Black",
      content: "Born in France",
      price: 120000,
    },
    {
      id: 1,
      title: "Red Knit",
      content: "Born in Seoul",
      price: 110000,
    },
    {
      id: 2,
      title: "Grey Yordan",
      content: "Born in the States",
      price: 130000,
    },
  ]);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Trip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">관광지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="신발"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="신발"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="신발"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
