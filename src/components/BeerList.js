// import React, { useState, useEffect } from "react";
import Beer from "./Beer";

export default function BeerList(props) {
  const beerItemsArray = props.cartItems;

  console.log(beerItemsArray, "beerItemsArray in beer list");

  return (
    <div>
    <section className="beerCartWrapper">
      {beerItemsArray &&
        beerItemsArray.map((item, index) => {
          return (
            <Beer
              key={index}
              item={item}
              data={props.data}
              beers={props.beers}
              editCartItems={props.editCartItems}
            />
          );
        })}
    </section>
  
    </div>
  );
}
