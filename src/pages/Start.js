import React from "react";
import { Link } from "react-router-dom";

import logo from "../media/logo_white.svg";

export default function Start(props) {
  props.setShowNav(false);

  return (
    <div className="Start">
      <article className="start-wrapper">
        <div className="start-title">
          <h1>Welcome to</h1>
          <h1>FooBar</h1>
        </div>
        <img className="logo" src={logo} alt="logo" />
        <Link to="/shop">
          <button className="start-btn">Start</button>
        </Link>
      </article>
    </div>
  );
}
