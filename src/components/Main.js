import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import { getBeers } from "../modules/Rest";
export default function Main(props) {
  const [beers, setBeers] = useState([]);

  const beerArray = beers;
  useEffect(() => {
    getBeers(setBeers);
  }, []);
  return (
    <main>
      {beerArray.map((beer) => {
        return (
          <Beer
            key={beer.name}
            {...beer}
            cartItems={props.cartItems}
            editCartItems={props.editCartItems}
          />
        );
      })}
    </main>
  );
}
