import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import { getBeers, getData } from "../modules/Rest";

export default function BeerList(props) {
  const [beers, setBeers] = useState([]);
  const [data, setData] = useState({});

  const beerItemsArray = data.taps;

  console.log(beerItemsArray, "beerItemsArray in beer list");

  useEffect(() => {
    getData(setData);
    getBeers(setBeers);

    // setInterval(() => {
    //   getData(setData);
    // }, 10000);
    // getData(setData);
  }, []);

  return (
    <main>
      {beerItemsArray &&
        beerItemsArray.map((item) => {
          return (
            <Beer
              key={item.id}
              {...item}
              beers={beers}
              cartItems={props.cartItems}
              editCartItems={props.editCartItems}
            />
          );
        })}
    </main>
  );
}
