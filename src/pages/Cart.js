import React from "react";
import Form from "../components/Form";
import CartList from "../components/CartList";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Cart(props) {
  console.log(props.cartItems, "in cart ");

  return (
    <section>
      <h2>Cart</h2>
      <CartList cartItems={props.cartItems} />
      <p>Her you will see your order</p>
      <Router>
        <div>
          <button>
            <Link to="/pay">Pay</Link>
          </button>
          <Switch>
            <Route path="/pay">
              <Pay />
            </Route>
          </Switch>
        </div>
      </Router>
    </section>
  );
}

function Pay() {
  return (
    <section>
      <Form />
    </section>
  );
}
