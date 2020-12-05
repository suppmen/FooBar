import React, { useState } from "react";
import CartItem from "./CartItem";
import { getBeers } from "../modules/Rest";

export default function CartList(props) {
  // const itemsArray = props.cartItems.filter((beer) => beer.amount > 0);
  console.log(props.itemsArray, "in cart list");

  props.editOrder(props.itemsArray);

  return (
    <div className="CartList">
      {props.itemsArray.map((item, i) => {
        return <CartItem key={i} {...item} />;
      })}
    </div>
  );
}
