import React from "react";
// import style css
import "../assets/css/style.css";
import Program from "./Program";

// import data
import data from "../assets/content/data.json";

function Grid(props) {
  //   console.log(data[0]);
  const programs = data.map(item => {
    return <Program content={item}></Program>;
  });
  return (
    <>
      <div className="grid">{programs}</div>
    </>
  );
}

export default Grid;
