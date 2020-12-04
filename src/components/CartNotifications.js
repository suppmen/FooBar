import React from "react";
import logo from "../media/logo_dark.svg";
import Cart from "../pages/Cart";
import { Link } from "react-router-dom";

export default function CartNotifications(props) {
  return (
    <div className="CartNotifications">
      <Link to="/cart">
        <div className="logo-dark" style={{ backgroundImage: `url(${logo})` }}>
          <h1>{props.notificationsCount}</h1>
        </div>
      </Link>
    </div>
  );
}
