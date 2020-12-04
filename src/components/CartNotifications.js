import React from "react";
import logo from "../media/logo_dark.svg";

export default function CartNotifications(props) {
  return (
    <div className="CartNotifications">
      <img className="logo-dark" src={logo} alt="logo" />
      <h1>{props.notificationsCount}</h1>
    </div>
  );
}
