import React from "react";
import CartNotifications from "./CartNotifications";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>FooBar</h1>
      <CartNotifications
        beers={props.beers}
        data={props.data}
        cartItems={props.cartItems}
        editCartItems={props.editCartItems}
        notificationsCount={props.notificationsCount}
      />
    </div>
  );
}
