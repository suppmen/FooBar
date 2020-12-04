import React from "react";
import CartNotifications from "./CartNotifications";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>FooBar</h1>
      <CartNotifications notificationsCount={props.notificationsCount} />
    </div>
  );
}
