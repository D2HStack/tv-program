import React from "react";
// import style css
import "../assets/css/style.css";

function Image(props) {
  return (
    <>
      <img alt="" src={props.image} className="image" />
    </>
  );
}

export default Image;
