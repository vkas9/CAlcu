import Clock from "./components/ClockHeading";
import ClockTime from "./components/ClockTime";
import ClockSlogan from "./components/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App() {
  let foodItems=[];
  return <center>
    <Clock />
    <ClockSlogan/>
     
    <ClockTime items={foodItems} />
  </center>
  
}
export default App;  