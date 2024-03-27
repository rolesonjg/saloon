import React, { useState } from "react";
import "../styles/Navbar.css";
// import sissorswhite from "../assets/sissorswhite.png";
import sissorspixelated from "../assets/sissorspixelated.png";
import locationpixelated from "../assets/locationpixelated.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col } from "react-bootstrap";
import { Router } from "react-router-dom";

const Navbarofthesaloon = (props) => {
  const [hovered, sethovered] = useState(false);
  const [hoveredtwo, sethoveredtwo] = useState(false);
  const [hoveredthree, sethoveredthree] = useState(false);
  const [roleson, setroleson] = useState("Sdfsd");
  const [hoveredfour, sethoveredfour] = useState(false);

  const changeHoverfunc = () => {
    sethovered(!hovered);
  };
  const changeHoverfunctwo = () => {
    sethoveredtwo(!hoveredtwo);
  };
  const changeHoverfuncthree = () => {
    sethoveredthree(!hoveredthree);
  };
  const changeHoverfuncfour = () => {
    sethoveredfour(!hoveredfour);
  };
  return (
    <div>
      <Navbar
        expand="lg"
        className=""
        style={{
          minHeight: "100px",

          // backgroundColor: "rgba(1, 11, 15, 0.2)",
          backgroundColor: props.backgroundcolor,
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#" style={{ paddingLeft: "100px" }}>
            <img src={sissorspixelated} style={{ height: "40px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Brand
            href="#"
            className="d-none d-md-grid"
            style={{ paddingLeft: "50px" }}
          >
            <img src={Location} alt="" />
          </Navbar.Brand>
          <Navbar.Brand
            href="#"
            className="d-none d-md-flex"
            style={{
              paddingLeft: "20px",
              color: "white",

              paddingRight: "20px",
            }}
          >
            <img
              style={{ height: "25px", marginTop: "4px", marginRight: "10px" }}
              src={locationpixelated}
              alt=""
            />

            <p style={{}}>Nagercoil</p>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ background: props.color }}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link> */}

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">c
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Navbar.Text onClick={changeHoverfunc} style={{ padding: "20px" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: hovered ? "white" : "white",
                  borderBottom: hovered ? "1px solid white" : "",
                  paddingBottom: "10px",
                }}
                href="/"
              >
                Home
              </a>
            </Navbar.Text>
            <Navbar.Text style={{ padding: "20px" }}>
              <a
                onClick={changeHoverfunctwo}
                style={{
                  textDecoration: "none",
                  color: hoveredtwo ? "white" : "white",
                  borderBottom: hoveredtwo ? "1px solid white" : "",
                  paddingBottom: "10px",
                }}
                href="/myappointments"
              >
                My Appointments
              </a>
            </Navbar.Text>
            <Navbar.Text style={{ padding: "20px", paddingRight: "150px" }}>
              <a
                onClick={changeHoverfuncthree}
                style={{
                  textDecoration: "none",
                  color: hoveredthree ? "white" : "white",
                  borderBottom: hoveredthree ? "1px solid white" : "",
                  paddingBottom: "10px",
                }}
                href="/mobile"
              >
                Login{" "}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarofthesaloon;
