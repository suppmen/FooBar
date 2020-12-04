import React from "react";
import Form from "../components/Form";
import CartList from "../components/CartList";

import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <section>
      <h2>Cart</h2>
      <CartList editOrder={props.editOrder} cartItems={props.cartItems} />
      <p>Her you will see your order</p>
      <div>
        <button>
          <Link to="/payment">Pay</Link>
        </button>
      </div>
    </section>
  );
}
