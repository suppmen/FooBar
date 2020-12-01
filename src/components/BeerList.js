import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import { getBeers, getData } from "../modules/Rest";

export default function BeerList(props) {
  const beerItemsArray = props.cartItems;

  console.log(beerItemsArray, "beerItemsArray in beer list");

  return (
    <main>
      {beerItemsArray &&
        beerItemsArray.map((item) => {
          return (
            <Beer
              key={item.id}
              {...item}
              data={props.data}
              editCartItems={props.editCartItems}
            />
          );
        })}
    </main>
  );
}
