import React from "react";
import { Link } from "react-router-dom";

export default function Message(props) {
  props.setShowNav(false);



  function clearCart(){
    props.clearCart();
  }



  return (
    <div className="Message">
      <article className="Message-wrapper">
        <div className="Message-title">
          <h1>Hurray!</h1>
        </div>
        <h1>Thank you for your order</h1>
        <h1>Your order number is</h1>
        <span>#{props.message.id}</span>

    

        <Link to="/">
          <button onClick={clearCart} className="finish-btn">Finish</button>
        </Link>
        
          {/* <button className="finish-btn">
          <a onClick={() => {window.location.href="https://suppmen.github.io/FooBar/"}}>Finish</a>
          </button> */}
        
      </article>
    </div>
  );
}
