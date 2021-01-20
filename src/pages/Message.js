import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Message(props) {
  useEffect(() => {
    props.setShowNav(false);
  });

  function clearCart() {
    props.clearCart();
    console.log(props.message, props.sentOrder);
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

        <Link to="/shop">
          <button onClick={clearCart} className="finish-btn">
            Finish
          </button>
        </Link>
      </article>
    </div>
  );
}
