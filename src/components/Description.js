import React from "react";
// import style css
import "../assets/css/style.css";

// import components
import Title from "../components/Title.js";
import Type from "../components/Type.js";
import Duration from "../components/Duration.js";
import IsUnseen from "../components/IsUnseen.js";

function Description(props) {
  //   console.log(props);
  return (
    <>
      <div className="description">
        <Title title={props.description.title}></Title>
        <Type type={props.description.type}></Type>
        <div className="description-end">
          <Duration duration={props.description.duration}></Duration>
          <IsUnseen isUnseen={props.description.isUnseen}></IsUnseen>
        </div>
      </div>
    </>
  );
}

export default Description;
