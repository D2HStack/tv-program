import React from "react";
// import style css
import "../assets/css/style.css";

function IsUnseen(props) {
  console.log(props);
  return (
    <>
      <div className="isUnseen">{props.isUnseen ? "Inédit" : ""}</div>
    </>
  );
}

export default IsUnseen;
