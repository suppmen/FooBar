import React from "react";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../media/beer-mug.svg";
// import circle from "../media/circle.svg";

export default function Home(props) {
  props.displayNav(false);
  return (
    <div className="Home">
      {/* <img className="circle" src={circle} alt="circle" /> */}
      <article className="home-wrapper">
        <Link to="/shop">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="home-title">
          {/* <h1>Welcome to</h1> */}
          <h1>FooBar</h1>
        </div>

        {/* <button className="home-btn">Start</button> */}
      </article>
    </div>
  );
}
