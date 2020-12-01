import React, { useState } from "react";

export default function CartItem(props) {
  return (
    <div className="CartItem">
      <h1>Beer name: {props.itemName}</h1>
      <h1>amount {props.count}</h1>
    </div>
  );
}
