import React from "react";

// import style css
import "./assets/css/style.css";

// import components
import Logo from "./components/Logo";
import Grid from "./components/Grid";

function App(props) {
  return (
    <>
      <div className="container">
        <Logo></Logo>
        <Grid></Grid>
      </div>
    </>
  );
}

export default App;
