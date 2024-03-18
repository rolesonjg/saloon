// import React from "react";
// import { Row, Col, Container, Button } from "react-bootstrap";
// import barbermen from "./assets/barbermen.png";
// import barbergirl from "./assets/barbergirl.png";
// import Navbarofthesaloon from "./ui-components/Navbarofthesaloon";
// import { useNavigate } from "react-router-dom";

// const Mensgirlstwo = () => {
//   const navigate = useNavigate();
//   const mensbuttonclick = () => {
//     navigate("/saloonsformen");
//   };
//   return (
//     <Container
//       style={{
//         padding: "0px",
//         margin: "0px",
//         minWidth: "100%",
//       }}
//     >
//       <Navbarofthesaloon backgroundcolor="black" color="white" />

//       <Row
//         style={{
//           padding: "0px",
//           margin: "0px",
//           width: "100%",
//           justifyContent: "center",
//         }}
//       >
//         <Col
//           style={{
//             maxWidth: "800px",
//             padding: "0px",
//             margin: "0px",
//             position: "relative",
//           }}
//         >
//           <img
//             style={{ minWidth: "768px", padding: "0px", margin: "0px" }}
//             src={barbermen}
//             alt=""
//           />
//           <button
//             onClick={mensbuttonclick}
//             style={{
//               width: "100%",
//               height: "75px",
//               background: "rgba(1, 11, 15, 0.3)",
//               color: "White",
//               fontWeight: "700",
//               fontSize: "40px",
//               position: "sticky",
//               left: "0px",
//               bottom: "0px",
//             }}
//           >
//             Mens
//           </button>
//         </Col>
//         <Col
//           style={{
//             maxWidth: "800px",
//             padding: "0px",
//             margin: "0px",
//             position: "relative",
//           }}
//         >
//           <img
//             style={{
//               minWidth: "768px",
//               padding: "0px",
//               margin: "0px",
//             }}
//             src={barbergirl}
//             alt=""
//           />
//           <button
//             style={{
//               width: "100%",
//               height: "75px",
//               background: "rgba(1, 11, 15, 0.3)",
//               color: "White",
//               fontWeight: "700",
//               fontSize: "40px",
//               position: "sticky",
//               right: "0px",
//               bottom: "0px",
//             }}
//           >
//             Girls
//           </button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Mensgirlstwo;

//2.0

import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import barbermen from "./assets/barbermen.png";
import barbergirl from "./assets/barbergirl.png";
import Navbarofthesaloon from "./ui-components/Navbarofthesaloon";
import { useNavigate } from "react-router-dom";
import "./styles/MensgirlsSection.css";
const Mensgirlstwo = () => {
  const navigate = useNavigate();
  const mensbuttonclick = () => {
    navigate("/saloonsformen");
  };
  const girlsbuttonclick = () => {
    navigate("/saloonsforwomen");
  };

  return (
    <Container
      style={{
        padding: "0px",
        margin: "0px",
        minWidth: "100%",
      }}
    >
      <Navbarofthesaloon backgroundcolor="black" color="white" />

      <Row
        style={{
          padding: "0px",
          margin: "0px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Col
          className="col-6 "
          style={{
            maxWidth: "800px",
            padding: "0px",
            margin: "0px",
            position: "relative",
          }}
        >
          <img
            className="barbermenimage"
            style={{ minWidth: "768px", padding: "0px", margin: "0px" }}
            src={barbermen}
            alt=""
          />
          <button
            onClick={mensbuttonclick}
            style={{
              width: "100%",
              height: "75px",
              background: "rgba(1, 11, 15, 0.3)",
              color: "White",
              fontWeight: "700",
              fontSize: "40px",
              position: "sticky",
              left: "0px",
              bottom: "0px",
            }}
          >
            Mens
          </button>
        </Col>
        <Col
          className="col-6"
          style={{
            maxWidth: "800px",
            padding: "0px",
            margin: "0px",
            position: "relative",
          }}
        >
          <img
            style={{
              minWidth: "768px",
              padding: "0px",
              margin: "0px",
            }}
            src={barbergirl}
            alt=""
          />
          <button
            style={{
              width: "100%",
              height: "75px",
              background: "rgba(1, 11, 15, 0.3)",
              color: "White",
              fontWeight: "700",
              fontSize: "40px",
              position: "sticky",
              right: "0px",
              bottom: "0px",
            }}
            onClick={girlsbuttonclick}
          >
            Girls
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Mensgirlstwo;
