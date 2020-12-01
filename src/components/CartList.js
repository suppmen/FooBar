import React, { useState } from "react";
import CartItem from "./CartItem";
import { getBeers } from "../modules/Rest";

export default function CartList(props) {
  const itemsArray = props.cartItems;
  console.log(itemsArray, "in cart list");

  return (
    <div className="CartList">
      {itemsArray.map((item, i) => {
        return <CartItem key={i} {...item} />;
      })}
    </div>
  );
}
