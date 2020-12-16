import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../media/beer-mug.svg";

export default function Home(props) {
  props.displayNav(false);
  return (
    <div className="Home">
      <article className="home-wrapper">
        <Link to="/shop">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="home-title">
          <h1>FooBar</h1>
        </div>
      </article>
    </div>
  );
}
