import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import Card from "./components/Card.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./components/Detail.js";
import About from "./components/About.js";

function App() {
  let [shoes] = useState(data);
  // console.log(shoes);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Trip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((el, i) => {
                    return <Card key={i} shoes={shoes[i]} i={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
