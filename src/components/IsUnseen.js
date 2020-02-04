import React from "react";
// import style css
import "../assets/css/style.css";

function IsUnseen(props) {
  console.log(props);
  return <>{props.isUnseen ? <div className="isUnseen">"Inédit"</div> : ""}</>;
}

export default IsUnseen;
