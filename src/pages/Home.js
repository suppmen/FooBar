import React from "react";
// import Shop from "./Shop";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../media/beer-mug.svg";
// import circle from "../media/circle.svg";

export default function Home(props) {
  return (
    <div className="Home">
      {/* <img className="circle" src={circle} alt="circle" /> */}
      <article className="home-wrapper">
        <img className="logo" src={logo} alt="logo" />
        <div className="home-title">
          {/* <h1>Welcome to</h1> */}
          <h1>FooBar</h1>
        </div>

        {/* <button className="home-btn">Start</button> */}
      </article>
    </div>
  );
}
