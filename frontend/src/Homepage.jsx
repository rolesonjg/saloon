import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import "./styles/Homepage.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import sissorswhite from "./assets/sissorswhite.png";
import saloonbackground from "./assets/saloonbackground.png";
import Navbarofthesaloon from "./ui-components/Navbarofthesaloon";
import MensgirlsSection from "./MensgirlsSection";
import axios from "axios";

// import Mensgirlstwo from "./Mensgirlstwo";
const Homepage = () => {
  let response;
  const [dataimage, setDataImage] = useState([]);
  const [bookappiontments, setbookappiontments] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     response = await axios.get("http://127.0.0.1:5000/");
  //     // console.log("response");
  //     setDataImage(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   console.log("dataimage", dataimage);
  // }, [response]);

  const bookappiontmentsfunc = () => {
    setbookappiontments(true);
  };

  return (
    <div>
      <Container
        fluid
        style={{ height: "100vh", display: bookappiontments ? "none" : "" }}
        className="containeroftheHomepage"
      >
        {/* {dataimage.map(function (data) {
          //let username = data.username;
          console.log("here!!!");
          const name = data.name;

          const blob = new Blob([Int8Array.from(data.img.data.data)], {
            type: data.img.contentType,
          });
          const image = window.URL.createObjectURL(blob);
          return (
            <div className="col-3">
              <div className="adjust">
                <div className="image">
                  <img width="300" height="300" src={image}></img>
                </div>
                <div className="name">{name}</div>
              </div>
            </div>
          );
        })}  */}
        <div>
          <Navbarofthesaloon
            backgroundcolor="rgba(1, 11, 15, 0.2)"
            color="white"
          />
        </div>

        <Container>
          <Row>
            <Col>
              {/* <Form className="d-flex" style={{ position: "relative" }}>
              <Form.Control
                type="search"
                className="me-2"
                // aria-label="Search"
                style={{
                  position: "relative",
                  height: "50px",
                  width: "480px",
                  backgroundColor: " rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  marginBottom: "50px",
                  marginTop: "50px",
                }}
              />
              <Button
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid white",
                  position: "absolute",
                  top: "50px",
                  left: "410px",
                  padding: "12px",
                  width: "70px",
                  borderRadius: "25px",
                  justifyContent: "center",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                <CiSearch />
              </Button>
            </Form> */}
              <InputGroup
                style={{
                  height: "50px",
                  minWidth: "200px",
                  maxWidth: "480px",
                  backgroundColor: " rgba(255, 255, 255, 0.1)",
                  // borderRadius: "25px",
                  marginBottom: "50px",
                  marginTop: "50px",
                  borderTopLeftRadius: "25px",
                  borderBottomLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
              >
                <Form.Control
                  type="text"
                  style={{
                    backgroundColor: " rgba(255, 255, 255, 0.1)",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                  }}
                />
                <InputGroup.Text
                  style={{
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                  }}
                >
                  <CiSearch />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1
                style={{
                  color: "white",
                  fontSize: "60px",
                  marginBottom: "50px",
                }}
              >
                Get Appointment for
              </h1>
              <h6 style={{ color: "white", fontSize: "20px" }}>
                Nearby Beauty Services
              </h6>
              <h6 style={{ color: "white", fontSize: "20px" }}>
                Trust the most caring hands and best expertise for it.
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                style={{
                  color: "black",
                  borderRadius: "25px",
                  // background: "white",
                  padding: "18px",
                  width: "300px",
                  marginTop: "50px",
                }}
                className="buttonofthehoempage"
                onClick={bookappiontmentsfunc}
              >
                Book Appointments
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
      <div
        style={{
          display: bookappiontments ? "grid" : "none",
          height: "700px",
        }}
      >
        <MensgirlsSection />
      </div>
    </div>
  );
};

export default Homepage;
