import React from "react";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../media/logo_white.svg";

export default function Home(props) {
  return (
    <div className="Home">
      <article className="home-wrapper">
        <div className="home-title">
          <h1>Welcome to</h1>
          <h1>FooBar</h1>
        </div>
        <img className="logo" src={logo} alt="logo" />
        {/* 
        <button className="home-btn">
          Start
        </button> */}
      </article>
    </div>
  );
}
