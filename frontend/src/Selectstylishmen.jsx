import React, { useEffect, useState } from "react";
import "./styles/Selectstylishmen.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  FormControl,
  Modal,
} from "react-bootstrap";
import { AVAILABLESERVICES } from "./Resources/ServiceformenDummy";
import axios from "axios";
// import Filterscontainer from "../../Filterscontainer";
// import Navbarofthesaloon from "../../../../Navbar/Navbarofthesaloon";
import Navbarofthesaloon from "./ui-components/Navbarofthesaloon";
import shavinghead from "./assets/shavinghead.png";
import clock from "./assets/clock.png";
import close from "./assets/close.png";
import calender from "./assets/calender.png";

// import stylishlogo from "../../../../../assets/stylishlogo.png";
import Anderson from "./assets/Anderson.png";
import star from "./assets/star.png";
import bag from "./assets/bag.png";
import handbagpixelated from "./assets/handbagpixelated.png";

import ratingspixelated from "./assets/ratingspixelated.png";

import { CiSearch } from "react-icons/ci";
// import Footer from "../../../../Footer/Footer";

import Filterstylishmen from "./ui-components/Filterstylishmen";
import Calendar from "react-calendar"; // Import react-calendar component
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import Footer from "./ui-components/Footer";
import {
  SELECTSTYLISHTIMINGS,
  STYLISHMENDETAILS,
} from "./Resources/SelectStylishMenDummy";

import { Addedtobebooked } from "./Resources/Addedtobebooked";
const filteredFemaleStylishMen = STYLISHMENDETAILS.filter(
  (person) => person.gender === "female"
);
const Selectstylishmen = () => {
  const [SELECTEDSTLISHNAME, setSELECTEDSTLISHNAME] = useState("");
  const [SELECTEDAPPDATE, setSELECTEDAPPDATE] = useState("");
  const [SELECTEDAPPTIME, setSELECTEDAPPTIME] = useState("");

  const [addedItems, setAddedItems] = useState({});
  const [expand, setexpand] = useState({});
  const [addeditemsIndex, setAddedItemsIndex] = useState({});
  const navigate = useNavigate();
  const handleconfirmappointment = () => {
    navigate("/mobile");
  };

  const handleSelect = (e, itemId, indexx, ITEM) => {
    console.log("SELECTED SAMBAVAM", ITEM);
    setSELECTEDSTLISHNAME(ITEM.heading);
    e.stopPropagation();

    setAddedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
    setAddedItemsIndex((prevState) => ({
      ...prevState,
      [indexx]: !prevState[indexx],
    }));
  };

  const handletimingdisp = (itemId) => {
    setexpand((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/selectstylishmenroute/images"
      );
      console.log("RES FROM BACKEND", response.data.saloonformen);
      setData(response.data.saloonformen);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterImage = async () => {
    console.log("Data from the Backend", data);
    const x = data.filter((item) => item.gender !== "Girls");
    setfilteredDatapro(x);
  };
  const [onclicktiming, setonclicktiming] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [date, setDate] = useState(new Date());
  const [DATES, SETDATES] = useState([]);
  useEffect(() => {
    // console.log("dateeeee", date);

    console.log("DATES", DATES);
  }, [date, DATES]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onChange = (date) => {
    setDate(date);

    // SETDATES((prevval) => {
    //   const v = [...prevval, date];
    //   SETDATES(v);
    // });
  };
  const handleh1click = (i) => {
    console.log("wait", i);
  };

  const handletimingButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  const [filteredDatapro, setfilteredDatapro] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    // Fetch data when component mounts
  }, []);

  useEffect(() => {
    handleFilterImage();

    // Filter data when 'data' state changes
  }, [data]);
  useEffect(() => {
    console.log("FILTERED DATA PROFES", filteredDatapro);
  }, [filteredDatapro]);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbarofthesaloon backgroundcolor="black" color="white" />{" "}
        </Col>
      </Row>
      <Row className="headingandsearchsection">
        <Col>
          <Container>
            <Row>
              <Col className="  col-lg-6 col-md-12  ">
                <h1
                  style={{
                    fontFamily: "Petrona, serif",
                    color: "rgba(53, 53, 53, 1)",
                    fontWeight: "700",
                  }}
                >
                  Select your Stylist{" "}
                </h1>
              </Col>
              <div className="  col-lg-6 col-md-8  col-sm-12 col-sm-12 col-12  containerofthesearchbar">
                <Col className=" col-lg-8 col-md-10 col-sm-10  col-xs-10  col-10 ">
                  <InputGroup className="inputoftheserchbar">
                    <Form.Control
                      type="text"
                      placeholder="Search for saloons"
                      style={{
                        backgroundColor: " rgba(255, 255, 255, 0.1)",
                        borderTopLeftRadius: "25px",
                        borderBottomLeftRadius: "25px",
                      }}
                    />
                    <InputGroup.Text className="inputgroupdottextofthesearchbar">
                      <CiSearch />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </div>
            </Row>
          </Container>
        </Col>
      </Row>
      <Container fluid="xl">
        <Row>
          <Col
            style={{ padding: "0px" }}
            className=" col-12 col-md-12 col-lg-3"
          >
            <Container className="filterofthestyish">
              <Row>
                <Col className="stylishlogocol">
                  <Filterstylishmen
                    setfilteredDatapro={setfilteredDatapro}
                    filteredDatapro={filteredDatapro}
                    data={data}
                    setData={setData}
                  />
                </Col>
              </Row>
              <Row></Row>
            </Container>
          </Col>
          <Col
            style={{ padding: "0px" }}
            className=" col-12 col-md-6 col-lg-5 "
          >
            <Container fluid className="secondarycontainer">
              {/* SECONDARY SINGLE CONTAINER */}

              {filteredDatapro.length > 0 &&
                filteredDatapro.map(function (item, indexx) {
                  const blob = new Blob([Int8Array.from(item.logo.data.data)], {
                    type: item.contentType,
                  });
                  const image = window.URL.createObjectURL(blob);

                  return (
                    <Container
                      fluid
                      // style={{ border: "1px solid blue" }}
                      className="singlesecondarycontainer"
                    >
                      <Row
                        style={{
                          borderBottom: "none",
                          marginRight: "5px",
                          marginLeft: "5px",
                          borderRadius: "25px",
                        }}
                        className="upsinglesecondary"
                        onClick={() => handletimingdisp(item.id)}
                      >
                        <Col className="secondcolumnpro col-lg-2  col-md-12  ">
                          <img
                            style={{ height: "70px", borderRadius: "10px" }}
                            src={image}
                            alt=""
                          />
                        </Col>
                        <Col className=" secondcolumnpro col-lg-6  col-md-6 ">
                          <Container fluid>
                            <Row style={{ minWidth: "200px" }}>
                              <Col
                                className="col-12 "
                                onClick={() => handleh1click(item._id)}
                                style={{
                                  fontFamily: "petrona,serif",
                                  fontWeight: "700",
                                  fontSize: "20px",
                                }}
                              >
                                {item.heading}
                              </Col>
                            </Row>
                            <Row className="secondrowofsecondcontainer">
                              <Col className="md-12  lg-6  d-flex ">
                                <img
                                  src={handbagpixelated}
                                  className="columnimageofthesecondcontainer"
                                  alt=""
                                />{" "}
                                <p>
                                  {item.experience}{" "}
                                  {item.experience === "1" ? "year" : "years"}
                                </p>
                              </Col>
                              <Col className=" md-12  lg-6 d-flex">
                                <img
                                  src={ratingspixelated}
                                  className="columnimageofthesecondcontainer"
                                  alt=""
                                />{" "}
                                <p>({item.review})</p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                        <Col className=" secondcolumnpro col-lg-3 col-md-12 ">
                          <Button
                            style={{ border: "1px solid black" }}
                            onClick={(e) =>
                              handleSelect(e, item._id, indexx, item)
                            }
                            className="selectbuttoninsecondarycontainer"
                          >
                            {addeditemsIndex[indexx] ? "Selected" : "Select"}
                          </Button>
                        </Col>
                      </Row>
                      <Row
                        className="onclicksecondary"
                        style={{ padding: "0px" }}
                      >
                        <Col>
                          {/* if onclick display */}
                          <Container
                            fluid
                            style={{
                              borderTop: expand[item.id]
                                ? "1px solid rgba(205, 205, 205, 1)"
                                : "none",
                              padding: expand[item.id] ? "25px" : "none",
                              display: expand[item.id] ? "grid" : "none",
                              transition: onclicktiming ? "500ms" : "500ms",
                            }}
                          >
                            <Row className="inerrowonclicksecondary">
                              <Col className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
                                <img
                                  onClick={handleShowModal}
                                  src={calender}
                                  alt=""
                                  // style={{ cursor: "pointer" }}
                                  className="calenderimage"
                                />
                                <Container>
                                  <Row className="mt-3">
                                    <Col className="text-center"></Col>
                                  </Row>
                                  <Modal
                                    show={showModal}
                                    onHide={handleCloseModal}
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>Calendar</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      {/* Use react-calendar component */}
                                      <Calendar
                                        // onChange={() => onChange(item)}
                                        onChange={(value, event) => {
                                          // setDate(value);
                                          // SETDATES(value),
                                          console.log("ITEM>id", item);
                                          SETDATES((prev) => ({
                                            ...prev,
                                            [item._id]: value.getDate(),
                                          }));
                                          console.log(
                                            "New date is: ",
                                            value.getDate()
                                          );
                                        }}
                                        value={date}
                                        className="custom-calendar"
                                        calendarClassName="custom-calendar-container"
                                        tileClassName="custom-calendar-tile"
                                      />
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        variant="secondary"
                                        onClick={handleCloseModal}
                                      >
                                        Close
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Container>

                                {/* <img onClick={handleShowModal}  src={calender} alt="" /> */}
                              </Col>
                              <Col className="   col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6  col-xxl-3">
                                <Container>
                                  <Row>
                                    <Col>
                                      <h6
                                        style={{
                                          color: "rgba(53, 53, 53, 1)",
                                          fontSize: "10px",
                                        }}
                                      >
                                        Date of appointment
                                      </h6>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col>
                                      <h6 style={{ fontWeight: "700" }}>
                                        Sat 24-Feb
                                      </h6>
                                    </Col>
                                  </Row>
                                </Container>
                              </Col>
                              <Col className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                <Button className="buttonofsecondary">
                                  Today
                                </Button>
                              </Col>
                              <Col className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
                                <Button className="buttonofsecondary">
                                  Tomorrow
                                </Button>
                              </Col>
                            </Row>

                            <Row
                              style={{
                                paddingTop: "25px",
                              }}
                            >
                              {SELECTSTYLISHTIMINGS.map((item, index) => (
                                <Col className="col-3" key={index}>
                                  <button
                                    style={{
                                      fontSize: "12px",
                                      fontFamily: "poppins,sans-serif",
                                      borderRadius: "30px",
                                      padding: "03px 5px 03px 5px",
                                      width: "70px",
                                      marginBottom: "25px",
                                      backgroundColor:
                                        selectedButtonIndex === index ||
                                        selectedButtonIndex === index - 1 ||
                                        selectedButtonIndex === index - 2
                                          ? "black"
                                          : "white",
                                      color:
                                        selectedButtonIndex === index ||
                                        selectedButtonIndex === index - 1 ||
                                        selectedButtonIndex === index - 2
                                          ? "white"
                                          : "black",
                                    }}
                                    className="bookedbutton notbooked booking "
                                    onClick={() =>
                                      handletimingButtonClick(index)
                                    }
                                  >
                                    {item}
                                  </button>
                                </Col>
                              ))}
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  );
                })}
            </Container>
          </Col>
          <Col style={{ padding: "0px" }} className=" col-12 col-md-6 col-lg-4">
            <Container
              style={{ minHeight: "200px" }}
              className="ternarycontainer"
              fluid
            >
              {/* <Container className="ternarycsinglecontainer" fluid>
                <Row>
                  <Col>
                    <Container className="singleternarycont">
                      <Row>
                        <Col sm={12} lg={2} md={12}>
                          <img
                            style={{ maxHeight: "50px" }}
                            src={shavinghead}
                            alt=""
                          />
                        </Col>
                        <Col sm={12} lg={9} md={12}>
                          <Container fluid>
                            <Row>
                              <Col>
                                <h6
                                  style={{
                                    textAlign: "start",
                                    fontFamily: "petrona,serif",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                  }}
                                >
                                  Global Hair Colouring
                                </h6>
                              </Col>
                            </Row>
                            <Row>
                              <Col
                                style={{
                                  display: "flex",
                                  paddingLeft: "20px",
                                }}
                              >
                                <img src={clock} alt="" /> <p>30 mins</p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                        <Col sm={12} lg={1} md={12}>
                          <Container fluid>
                            <Row>
                              <Col>
                                <img src={close} alt="" />
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container> */}
              {Addedtobebooked.map((item, index) => (
                <Container className="singleternarycont">
                  <Row>
                    <Col
                      style={{ padding: "0px" }}
                      className="col-lg-12 col-2 col-md-2   col-xl-2 itemdotlogocol"
                    >
                      <img
                        style={{ maxHeight: "50px" }}
                        src={item.logo}
                        alt=""
                      />
                    </Col>
                    <Col className="col-lg-12 col8 col-sm-8 col-md-8 col-xl-9">
                      <Container fluid>
                        <Row>
                          <Col>
                            <h6
                              style={{
                                textAlign: "start",
                                fontFamily: "petrona,serif",
                                fontWeight: "700",
                                fontSize: "19px",
                              }}
                            >
                              {item.heading}
                            </h6>
                          </Col>
                        </Row>
                        <Row style={{ padding: "0px", margin: "0px" }}>
                          <Col
                            className="col-6"
                            style={{
                              display: "flex",
                              paddingLeft: "20px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <img
                              src={item.clockimage}
                              style={{
                                height: "25px",
                              }}
                              alt=""
                            />{" "}
                            <p
                              style={{
                                color: "rgba(121, 121, 121, 1)",
                                fontFamily: "poppins,sans-serif",
                                paddingTop: "2px",
                                fontSize: "16px",
                                paddingLeft: "10px",
                              }}
                            >
                              {item.timing}
                            </p>
                          </Col>
                          <Col
                            className="col-6"
                            style={{
                              display: "flex",
                              paddingLeft: "20px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <img
                              src={item.moneyimage}
                              style={{
                                height: "25px",
                              }}
                              alt=""
                            />{" "}
                            <p
                              style={{
                                fontFamily: "poppins,sans-serif",
                                paddingTop: "2px",
                                fontSize: "16px",
                                paddingLeft: "10px",
                                fontWeight: "700",
                                color: "rgba(53, 53, 53, 1)",
                              }}
                            >
                              {item.money}
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col className="col-lg-12 col-2  col-sm-2 col-md-2  col-xl-1">
                      <Container fluid>
                        <Row>
                          <Col className="itemdotclosecont">
                            <img
                              style={{
                                paddingTop: "10px",
                                paddingRight: "10px",
                              }}
                              src={item.closeimage}
                              alt=""
                            />
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              ))}

              <Container>
                <Row
                  style={{
                    paddingRight: "0px",
                    marginTop: "180px",
                    marginBottom: "15px",
                  }}
                >
                  <Col className="col-1">
                    <input type="checkbox" />
                  </Col>
                  <Col className="col-10">
                    <p>
                      I Accept the{" "}
                      <span>
                        {" "}
                        <a href="#">terms and condition</a>{" "}
                      </span>
                    </p>{" "}
                  </Col>
                </Row>
                <Row style={{ marginTop: "15px", marginBottom: "15px" }}>
                  <Col style={{ padding: "0px" }} className="col-4 d-flex">
                    <img
                      className="align-self-start"
                      style={{ margin: "0px" }}
                      src={calender}
                      alt=""
                    />
                    <div className="d-flex flex-column gap-0">
                      <p
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "200",
                          fontSize: "10px",
                          textAlign: "start",
                          paddingTop: "5px",
                          margin: "0px",
                        }}
                      >
                        Your Stylist
                      </p>
                      <h6
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "600",
                          fontSize: "10px",
                          margin: "0px",
                        }}
                      >
                        {SELECTEDSTLISHNAME}
                      </h6>
                    </div>
                  </Col>
                  <Col style={{ padding: "0px" }} className="col-4 d-flex">
                    <img
                      className="align-self-start"
                      style={{ margin: "0px" }}
                      src={calender}
                      alt=""
                    />
                    <div className="d-flex flex-column gap-0">
                      <p
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "200",
                          fontSize: "08px",
                          textAlign: "start",
                          paddingTop: "5px",

                          margin: "0px",
                        }}
                      >
                        Date of Appointment{" "}
                      </p>
                      <h6
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "600",
                          fontSize: "10px",
                          margin: "0px",
                        }}
                      >
                        {date.getDate()}
                      </h6>
                    </div>
                  </Col>
                  <Col style={{ padding: "0px" }} className="col-4 d-flex">
                    <img
                      className="align-self-start"
                      style={{ margin: "0px" }}
                      src={calender}
                      alt=""
                    />
                    <div className="d-flex flex-column gap-0">
                      <p
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "200",
                          fontSize: "08px",
                          textAlign: "start",
                          paddingTop: "5px",

                          margin: "0px",
                        }}
                      >
                        Time of Appointment{" "}
                      </p>
                      <h6
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "600",
                          fontSize: "10px",

                          margin: "0px",
                        }}
                      >
                        04:30 - 05:30pm
                      </h6>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "30px", marginTop: "30px" }}>
                  <Col style={{ paddingRight: "0px" }} className="col-2 ">
                    <div className="d-flex flex-column">
                      <p
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "300",
                          fontSize: "10px",

                          margin: "0px",
                        }}
                      >
                        02 Items
                      </p>
                      <h6
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "600",
                          fontSize: "15px",

                          margin: "0px",
                        }}
                      >
                        1 hour
                      </h6>
                    </div>
                  </Col>
                  <Col
                    style={{
                      paddingLeft: "10px",
                      borderLeft: "2px solid rgba(205, 205, 205, 1)",
                    }}
                    className="col-3"
                  >
                    <h6
                      style={{
                        fontFamily: "poppins,sans-serif",
                        fontWeight: "600",
                        fontSize: "15px",
                        paddingTop: "15px",
                        margin: "0px",
                      }}
                    >
                      Rs.350
                    </h6>
                  </Col>
                  <Col className="col-6">
                    <Button
                      style={{ border: "1px solid black" }}
                      className="buttonofsecondary "
                    >
                      <h6
                        style={{
                          fontFamily: "poppins,sans-serif",
                          fontWeight: "600",
                          fontSize: "10px",
                          padding: "5px",
                          margin: "0px",
                        }}
                        onClick={handleconfirmappointment}
                      >
                        Confirm Appointment
                      </h6>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Selectstylishmen;
