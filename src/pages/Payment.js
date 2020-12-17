import React, { useEffect } from "react";
import Form from "../components/Form";
import cart from "../media/cart.svg";
import { Link } from "react-router-dom";

export default function Payment(props) {
  useEffect(() => {
    props.setShowNav(false);
  });

  return (
    <section>
      <div className="top">
        <Link to="/cart">
          <div className="total-price-form">
            <img className="payment-cart" src={cart} alt="cart" />

            <h2>= {props.totalPrice} DKK</h2>
          </div>
        </Link>
        <div className="mask">
          <div className="triangle"></div>
        </div>
      </div>

      <Form
        sendPostRequest={props.sendPostRequest}
        cartItems={props.cartItems}
      />
    </section>
  );
}
