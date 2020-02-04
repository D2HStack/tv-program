import React from "react";
// import style css
import "../assets/css/style.css";
import Program from "./Program";

// import data
import data from "../assets/content/data.json";

function Grid(props) {
  //   console.log(data[0]);
  return (
    <>
      <div className="grid">
        <Program content={data[0]}></Program>
      </div>
    </>
  );
}

export default Grid;
