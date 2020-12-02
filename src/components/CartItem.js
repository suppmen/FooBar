import React, { useState } from "react";

export default function CartItem(props) {
  return (
    <div className="CartItem">
      <h1>Beer name: {props.name}</h1>
      <h1>amount {props.amount}</h1>
    </div>
  );
}
