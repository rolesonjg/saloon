import React, { useEffect, useState } from "react";
import Navbarofthesaloon from "./ui-components/Navbarofthesaloon";
import Footer from "./ui-components/Footer";
import close from "./assets/close.png";
import "./styles/Myappointments.css";
import clock from "./assets/clock.png";
import noappointments from "./assets/noappointments.png";
import money from "./assets/moneyimage.png";

import barbermen from "./assets/barbermen.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Myappointments = () => {
  const [cancelappointmenttoogle, setcancelappointmenttoggle] = useState(false);
  const handletoggleappointment = () => {
    setcancelappointmenttoggle(!cancelappointmenttoogle);
  };
  const navigate = useNavigate();
  return (
    <Container className="containerpro" fluid>
      <Row>
        <Col>
          <Navbarofthesaloon backgroundcolor="black" color="white" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row
              style={{
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              <Col>
                <h4
                  style={{
                    fontFamily: "petrona,serif",
                    fontWeight: "700",
                    fontSize: "25px",
                  }}
                >
                  My Appointments
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <Container
                  style={{
                    border: "1px solid rgba(205, 205, 205, 1)",
                  }}
                >
                  <Row>
                    <Col
                      className="col-12 col-sm-8 col-lg-4"
                      style={{
                        border: "1px solid rgba(205, 205, 205, 1)",
                        paddingTop: "25px",
                      }}
                    >
                      <Container>
                        <Row style={{ marginBottom: "25px" }}>
                          <Col>
                            <Container>
                              <Row>
                                <Col className="col-3">
                                  {" "}
                                  <img
                                    src={barbermen}
                                    style={{
                                      width: "50px",
                                      borderRadius: "10px",
                                    }}
                                    alt=""
                                  />
                                </Col>
                                <Col
                                  style={{ padding: "0px" }}
                                  className="col-9"
                                >
                                  <Container>
                                    <Row>
                                      <Col>
                                        <h6
                                          style={{
                                            fontFamily: "petrona,serif",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                          }}
                                        >
                                          Global Hair coloring
                                        </h6>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col className="col-6 col-lg-2">
                                        <img src={clock} alt="" />
                                      </Col>
                                      <Col
                                        style={{ padding: "0px" }}
                                        className="col-6 col-lg-3"
                                      >
                                        <h6 style={{ paddingTop: "8px" }}>
                                          30 mins
                                        </h6>
                                      </Col>
                                      <Col
                                        style={{ padding: "0px" }}
                                        className="col-6 col-lg-1"
                                      >
                                        <img src={clock} alt="" />
                                      </Col>
                                      <Col
                                        style={{ padding: "0px" }}
                                        className="col-6 col-lg-4"
                                      >
                                        <h6
                                          style={{
                                            paddingTop: "8px",
                                            paddingLeft: "5px",
                                            fontFamily: "poppins,sans-serif",
                                            fontWeight: "700",
                                          }}
                                        >
                                          Rs.150
                                        </h6>
                                      </Col>
                                    </Row>
                                  </Container>
                                </Col>
                              </Row>
                            </Container>
                          </Col>
                        </Row>

                        <Row style={{ marginBottom: "25px" }}>
                          <Col>
                            <Container>
                              <Row>
                                <Col className="col-3">
                                  {" "}
                                  <img
                                    src={barbermen}
                                    style={{
                                      width: "50px",
                                      borderRadius: "10px",
                                    }}
                                    alt=""
                                  />
                                </Col>
                                <Col
                                  style={{ padding: "0px" }}
                                  className="col-9"
                                >
                                  <Container>
                                    <Row>
                                      <Col>
                                        <h6
                                          style={{
                                            fontFamily: "petrona,serif",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                          }}
                                        >
                                          Global Hair coloring
                                        </h6>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col className="col-6 col-lg-2">
                                        <img src={clock} alt="" />
                                      </Col>
                                      <Col
                                        style={{ padding: "0px" }}
                                        className="col-6 col-lg-3"
                                      >
                                        <h6 style={{ paddingTop: "8px" }}>
                                          30 mins
                                        </h6>
                                      </Col>
                                      <Col
                                        style={{ padding: "0px" }}
                                        className="col-6 col-lg-1"
                                      >
                                        <img src={clock} alt="" />
                                      </Col>
                                      <Col
                                        style={{ padding: "0px" }}
                                        className="col-6 col-lg-4"
                                      >
                                        <h6
                                          style={{
                                            paddingTop: "8px",
                                            paddingLeft: "5px",
                                            fontFamily: "poppins,sans-serif",
                                            fontWeight: "700",
                                          }}
                                        >
                                          Rs.150
                                        </h6>
                                      </Col>
                                    </Row>
                                  </Container>
                                </Col>
                              </Row>
                            </Container>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col
                      style={{
                        border: "1px solid rgba(205, 205, 205, 1)",
                        paddingTop: "25px",
                      }}
                      className="col-12 col-sm-8 col-lg-4"
                    >
                      <Container>
                        <Row style={{ marginBottom: "25px" }}>
                          <Col
                            style={{ alignItems: "center" }}
                            className="d-flex col-6"
                          >
                            {" "}
                            <img
                              src={close}
                              style={{ height: "25px" }}
                              alt=""
                            />
                            <div
                              style={{ paddingLeft: "10px" }}
                              className="d-flex flex-column "
                            >
                              <p
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Salon Name
                              </p>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "700",
                                  fontSize: "17px",
                                }}
                              >
                                Lakme Salon
                              </h4>
                            </div>
                          </Col>
                          <Col
                            style={{ alignItems: "center" }}
                            className="d-flex col-6 "
                          >
                            {" "}
                            <img
                              src={close}
                              style={{ height: "25px" }}
                              alt=""
                            />
                            <div
                              style={{ paddingLeft: "10px" }}
                              className="d-flex flex-column "
                            >
                              <p
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Salon Name
                              </p>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "700",
                                  fontSize: "17px",
                                }}
                              >
                                Lakme Salon
                              </h4>
                            </div>
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "25px" }}>
                          <Col
                            style={{ alignItems: "center" }}
                            className="d-flex col-6"
                          >
                            <img
                              src={close}
                              style={{ height: "25px" }}
                              alt=""
                            />
                            <div
                              style={{ paddingLeft: "10px" }}
                              className="d-flex flex-column "
                            >
                              <p
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Salon Name
                              </p>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "700",
                                  fontSize: "17px",
                                }}
                              >
                                Lakme Salon
                              </h4>
                            </div>
                          </Col>
                          <Col
                            style={{ alignItems: "center" }}
                            className="d-flex col-6 "
                          >
                            {" "}
                            <img
                              src={close}
                              style={{ height: "25px" }}
                              alt=""
                            />
                            <div
                              style={{ paddingLeft: "10px" }}
                              className="d-flex flex-column "
                            >
                              <p
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Salon Name
                              </p>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "700",
                                  fontSize: "17px",
                                }}
                              >
                                Lakme Salon
                              </h4>
                            </div>
                          </Col>
                        </Row>

                        <Row style={{ marginBottom: "25px" }}>
                          <Col
                            style={{ alignItems: "center" }}
                            className="d-flex col-6"
                          >
                            {" "}
                            <img
                              src={close}
                              style={{ height: "25px" }}
                              alt=""
                            />
                            <div
                              style={{ paddingLeft: "10px" }}
                              className="d-flex flex-column "
                            >
                              <p
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Salon Name
                              </p>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "700",
                                  fontSize: "17px",
                                }}
                              >
                                Lakme Salon
                              </h4>
                            </div>
                          </Col>
                          <Col
                            style={{ alignItems: "center" }}
                            className="d-flex col-6 "
                          >
                            {" "}
                            <img
                              src={close}
                              style={{ height: "25px" }}
                              alt=""
                            />
                            <div
                              style={{ paddingLeft: "10px" }}
                              className="d-flex flex-column "
                            >
                              <p
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Salon Name
                              </p>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontFamily: "poppins,sans-serif",
                                  fontWeight: "700",
                                  fontSize: "17px",
                                }}
                              >
                                Lakme Salon
                              </h4>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid rgba(205, 205, 205, 1)",
                      }}
                      className="col-12 col-sm-8 col-lg-4 d-flex"
                    >
                      <Button
                        onClick={handletoggleappointment}
                        className="buttonmyappointment"
                      >
                        Cancel Appiontment
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row
              className="d-flex "
              style={{ justifyContent: "center", margin: "25px" }}
            >
              {/* SDfsdfsdfsdfsf++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              <Col
                style={{ display: cancelappointmenttoogle ? "block" : "none" }}
                className={cancelappointmenttoogle ? "col-6 content  blur" : ""}
              >
                <Container
                  style={{
                    borderRadius: "25px",
                    border: "1px solid rgba(0, 0, 0, 0.5)",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    maxWidth: "700px",
                    padding: "20px",
                  }}
                >
                  <Row style={{ marginBottom: "25px" }}>
                    <Col
                      style={{ alignItems: "center" }}
                      className="d-flex col-6"
                    >
                      {" "}
                      <img src={close} style={{ height: "25px" }} alt="" />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="d-flex flex-column "
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "300",
                            fontSize: "12px",
                          }}
                        >
                          Salon Name
                        </p>
                        <h4
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "700",
                            fontSize: "17px",
                          }}
                        >
                          Lakme Salon
                        </h4>
                      </div>
                    </Col>
                    <Col
                      style={{ alignItems: "center" }}
                      className="d-flex col-6 "
                    >
                      {" "}
                      <img src={close} style={{ height: "25px" }} alt="" />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="d-flex flex-column "
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "300",
                            fontSize: "12px",
                          }}
                        >
                          Salon Name
                        </p>
                        <h4
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "700",
                            fontSize: "17px",
                          }}
                        >
                          Lakme Salon
                        </h4>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "25px" }}>
                    <Col
                      style={{ alignItems: "center" }}
                      className="d-flex col-6"
                    >
                      <img src={close} style={{ height: "25px" }} alt="" />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="d-flex flex-column "
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "300",
                            fontSize: "12px",
                          }}
                        >
                          Salon Name
                        </p>
                        <h4
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "700",
                            fontSize: "17px",
                          }}
                        >
                          Lakme Salon
                        </h4>
                      </div>
                    </Col>
                    <Col
                      style={{ alignItems: "center" }}
                      className="d-flex col-6 "
                    >
                      {" "}
                      <img src={close} style={{ height: "25px" }} alt="" />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="d-flex flex-column "
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "300",
                            fontSize: "12px",
                          }}
                        >
                          Salon Name
                        </p>
                        <h4
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "700",
                            fontSize: "17px",
                          }}
                        >
                          Lakme Salon
                        </h4>
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ marginBottom: "25px" }}>
                    <Col
                      style={{ alignItems: "center" }}
                      className="d-flex col-6"
                    >
                      {" "}
                      <img src={close} style={{ height: "25px" }} alt="" />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="d-flex flex-column "
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "300",
                            fontSize: "12px",
                          }}
                        >
                          Salon Name
                        </p>
                        <h4
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "700",
                            fontSize: "17px",
                          }}
                        >
                          Lakme Salon
                        </h4>
                      </div>
                    </Col>
                    <Col
                      style={{ alignItems: "center" }}
                      className="d-flex col-6 "
                    >
                      {" "}
                      <img src={close} style={{ height: "25px" }} alt="" />
                      <div
                        style={{ paddingLeft: "10px" }}
                        className="d-flex flex-column "
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "300",
                            fontSize: "12px",
                          }}
                        >
                          Salon Name
                        </p>
                        <h4
                          style={{
                            margin: "0px",
                            fontFamily: "poppins,sans-serif",
                            fontWeight: "700",
                            fontSize: "17px",
                          }}
                        >
                          Lakme Salon
                        </h4>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "75px", marginLeft: "50px" }}>
                    <Col>
                      <h4
                        style={{
                          margin: "0px",
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "700",
                          fontSize: "20px",
                          color: "rgba(220, 0, 0, 1)",
                        }}
                      >
                        Cancel Appointment{" "}
                      </h4>
                    </Col>
                    <Col>
                      <h4
                        onClick={handletoggleappointment}
                        style={{
                          margin: "0px",
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "700",
                          fontSize: "20px",
                          color: "rgba(78, 117, 251, 1)",
                        }}
                      >
                        Discard{" "}
                      </h4>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Container>
          <Row className="d-flex">
            <Col
              style={{ justifyContent: "center", marginBottom: "25px" }}
              className="d-flex"
            >
              <img
                style={{ paddingRight: "25px" }}
                src={noappointments}
                alt=""
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ marginBottom: "10px" }}>
              <h4
                style={{
                  textAlign: "center",
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Your Appointment is empty{" "}
              </h4>{" "}
            </Col>
          </Row>
          <Row>
            <Col style={{ marginBottom: "25px" }}>
              <h6
                style={{
                  textAlign: "center",
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "200",
                  fontSize: "13px",
                }}
              >
                Looks like you haven’t made your choice yet......
              </h6>{" "}
            </Col>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button className="bookappointments">Book Appointments</Button>{" "}
              </Col>
            </Row>
          </Row>
        </Container>
      </Row>
      <Row style={{ marginTop: "200px" }}>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Myappointments;
