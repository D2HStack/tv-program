import React from "react";
// import style css
import "../assets/css/style.css";

function Time(props) {
  return (
    <>
      <span className="time">{props.time}</span>
    </>
  );
}

export default Time;
