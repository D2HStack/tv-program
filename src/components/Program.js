import React from "react";
// import style css
import "../assets/css/style.css";

// import components
import Time from "../components/Time";
import Image from "../components/Image";
import Description from "../components/Description";

function Program(props) {
  const description = {
    title: props.content.title,
    type: props.content.type,
    duration: props.content.duration,
    isUnseen: props.content.isUnseen
  };
  //   console.log(props.content.title);
  return (
    <>
      <div className="program">
        <Time time={props.content.time}>time</Time>
        <Image image={props.content.image}></Image>
        <Description description={description}></Description>
      </div>
    </>
  );
}

export default Program;
