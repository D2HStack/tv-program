import React from "react";
// import style css
import "../assets/css/style.css";

// import components
import img from "../assets/img/M6_logo.svg";

function Logo(props) {
  return (
    <>
      <div className="container-logo">
        <img alt="logo M6" src={img} className="logo-img"></img>
        <span className="logo-title">M6</span>
      </div>
    </>
  );
}

export default Logo;
