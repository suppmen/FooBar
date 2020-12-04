import React, { useState } from "react";
import CartItem from "./CartItem";
import { getBeers } from "../modules/Rest";

export default function CartList(props) {
  return (
    <div className="CartList">
      {props.itemsArray.map((item, i) => {
        return <CartItem key={i} {...item} />;
      })}
    </div>
  );
}
