import React from "react";
import CartList from "../components/CartList";

import arrow from "../media/long-arrow.svg";

import { Link } from "react-router-dom";

export default function Cart(props) {
  props.displayNav(true);

  function Nobeers() {
    if (props.notificationsCount === 0) {
      return (
        <div className="noBeers">
          <h3>You have no beers on your order!</h3>
          <Link to="/shop">
            <button className="pay">Let's fix that</button>
          </Link>
        </div>
      );
    } else {
      console.log("we have an order");
      return (
        <div className="next-step">
          <Link to="/payment">
            <button className="pay">Pay</button>
          </Link>


          <div className="link-back">
          <Link to="/shop" className="continue">
            <img className="back-arrow-dark" src={arrow} alt="arrow" />
            <p>Continue Shopping</p>  
          </Link>

          </div>
        </div>
      );
    }
  }
  function Total() {
    if (props.notificationsCount === 1) {
      return (
        <h3 className="cart-total">
          A total of {props.notificationsCount} beer
        </h3>
      );
    } else {
      return (
        <h3 className="cart-total">
          A total of {props.notificationsCount} beers
        </h3>
      );
    }
  }

  return (
    <section className="cart-section">
      <h2 className="cart-order">Your Order</h2>
      <Total />
      <CartList
        editOrder={props.editOrder}
        cartItems={props.cartItems}
        editCartItems={props.editCartItems}
        notificationsCount={props.notificationsCount}
      />
      <h3 className={props.totalPrice>0?"total-price": "hide"}>
        Total: {props.totalPrice} DKK</h3>
      <Nobeers />
      <div></div>
    </section>
  );
}
