import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Saloonsformen from "./Saloonsformen";
import Serviceformen from "./Serviceformen";
import Selectstylishmen from "./Selectstylishmen";
import Mobile from "./Mobile";
import Validateotp from "./ValidateOtp";
import Myappointments from "./Myappointments";
import Test from "./Test/TESTINGimaGES/Test";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Saloonsforwomen from "./Saloonsforwomen";
import Selectstylishwomen from "./Selectstylishwomen";
import Serviceforwomen from "./Serviceforwomen";
import Mobilenumber from "./Test/TESTINGimaGES/bilsy";
import Reviewssection from "./Reviewssection";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/selectstylishmen"
            element={<Selectstylishmen />}
          ></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/saloonsformen" element={<Saloonsformen />}></Route>
          <Route path="/serviceformen" element={<Serviceformen />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/validateotp" element={<Validateotp />}></Route>
          <Route path="/myappointments" element={<Myappointments />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/test2" element={<Test2 />}></Route>
          <Route path="/test3" element={<Test3 />}></Route>
          <Route path="/saloonsforwomen" element={<Saloonsforwomen />}></Route>
          <Route path="/serviceforwomen" element={<Serviceforwomen />}></Route>
          <Route
            path="/selectstylishwomen"
            element={<Selectstylishwomen />}
          ></Route>
          <Route path="/reviewssection" element={<Reviewssection />}></Route>
          <Route path="/mobilenumber" element={<Mobilenumber />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
