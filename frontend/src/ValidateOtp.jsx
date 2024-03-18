import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
// import Navbarofthesaloon from "../../../../../../Navbar/Navbarofthesaloon";
// import Footer from "../../../../../../Footer/Footer";
import "./styles/ValidateOtp.css";
import Navbarofthesaloon from "./ui-components/Navbarofthesaloon";
import Footer from "./ui-components/Footer";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Validateotp = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const totaldetails = location.state;
  useEffect(() => {
    console.log("totaldetails", totaldetails);
  }, [totaldetails]);

  const [otp, setOtp] = useState("");
  const handleChange = (newValue) => {
    // setOtp(newValue);
    const filteredValue = newValue.replace(/\D/g, "");
    setOtp(filteredValue);
  };

  useEffect(() => {
    if (otp.length > 5) {
      console.log("otp", otp);
      const sendotptoverify = async (otp) => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/otp/verifyotp",
            {
              otp: parseInt(otp),
              email: totaldetails.userdetails.email,
              phoneNumber: totaldetails.userdetails.phonenumber,
            }
          );
          console.log("Response:", response.data.message);
          if (response.data.message === "success") {
            console.log("Consolelogging when sucessfully validated ");

            
          }
        } catch (error) {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
        }
      };
      sendotptoverify(otp);
    }
  }, [otp]);


  const PostbuttonDATA = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/selectedbuttons/data",
        {
          IDoftheitem: itemidentifer,
          date: fullDate,
          selectedbuttons: uniqueINDEXARR,
        },
        {}
      );
      console.log("SUCESSFULLY POSTED DATA CONFIRM", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlevalidate = () => {
    navigate("/myappointments");
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbarofthesaloon backgroundcolor="black" color="white" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Container
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(1, 11, 15, 1)",
              marginTop: "100px",
            }}
          >
            <Row>
              <Col style={{ marginBottom: "25px", marginTop: "50px" }}>
                <h4 className="h4mobile">
                  Please enter the one time password to verify
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="h6mobile">A code has been sent to *******621</h6>
              </Col>
            </Row>
            <Row
              style={{
                maxWidth: "1000px",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              <MuiOtpInput
                className="MuiOtpInput-TextField"
                length={6}
                value={otp}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Col>
                <h6
                  style={{ fontWeight: "600", marginBottom: "50px" }}
                  className="h6mobile"
                >
                  Resend One-Time Password
                </h6>
              </Col>
            </Row>
            <Row>
              <Col className=" d-flex justify-content-center ">
                <Button className="validateotpbutton" onClick={handlevalidate}>
                  Validate
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Validateotp;