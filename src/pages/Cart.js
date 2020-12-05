import React from "react";
import Form from "../components/Form";
import CartList from "../components/CartList";


import { Link } from "react-router-dom";

export default function Cart(props) {
  const itemsArray = props.cartItems.filter((beer) => beer.amount > 0);
  console.log("in Cart itemsArray is: ", itemsArray);
  return (
    <section>
      <h2>Cart</h2>
      <CartList editOrder={props.editOrder} cartItems={props.cartItems} itemsArray={itemsArray} />
      <p>Her you will see your order</p>
      <div>
        <button>
          <Link to="/payment">Pay</Link>
        </button>
      </div>
    </section>
  );
}
