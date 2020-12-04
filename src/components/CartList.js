import React, { useState } from "react";
import CartItem from "./CartItem";
import { getBeers } from "../modules/Rest";

export default function CartList(props) {
  const itemsArray = props.cartItems.filter((beer) => beer.amount > 0);
  console.log(itemsArray, "in cart list");

  console.log("editOrder is: ", props.editOrder);

  props.editOrder(itemsArray);

  return (
    <div className="CartList">
      {itemsArray.map((item, i) => {
        return <CartItem key={i} {...item} />;
      })}
    </div>
  );
}
