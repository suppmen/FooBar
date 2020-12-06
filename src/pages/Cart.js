import React from "react";
import Form from "../components/Form";
import CartList from "../components/CartList";
import arrow from "../media/long-arrow.svg";

import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <section>
      <h2>Your Order</h2>
      <Total />
      <CartList
        editOrder={props.editOrder}
        cartItems={props.cartItems}
        editCartItems={props.editCartItems}
        notificationsCount={props.notificationsCount}
      />
      <p>Her you will see your order</p>
      <div>
        <button>
          <Link to="/payment">Pay</Link>
        </button>
      </div>
    </section>
  );
}
