import React from "react";
import { Link } from "react-router-dom";

export default function Message(props) {
  props.setShowNav(false);

  return (
    <div className="Message">
      <article className="Message-wrapper">
        <h1>I am message</h1>
        <h1>{props.message.id}</h1>
        <div className="Message-title">
          <h1>Welcome to</h1>
          <h1>FooBar</h1>
        </div>
        <Link to="/">
          <button className="start-btn">Continue</button>
        </Link>
      </article>
    </div>
  );
}
