// import React, { useState, useEffect } from "react";
import Beer from "./Beer";

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
              item={item}
              data={props.data}
              beers={props.beers}
              editCartItems={props.editCartItems}
            />
          );
        })}
    </main>
  );
}
