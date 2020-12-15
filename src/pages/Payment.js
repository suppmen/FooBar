import React from "react";
import Form from "../components/Form";
import cart from "../media/cart.svg";

export default function Payment(props) {
  props.setShowNav(false);

  return (
    <section>
      <div className="top">
        <div className="total-price-form">
          <img className="payment-cart" src={cart} alt="cart" />
          <h2>= {props.totalPrice} DKK</h2>
        </div>
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
