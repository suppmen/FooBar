import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import { getBeers, getData } from "../modules/Rest";

export default function BeerList(props) {
  const [beers, setBeers] = useState([]);
  const [data, setData] = useState({});

  const beerItemsArray = data.taps;
  // const beersDetailsArray = beers;

  console.log(beerItemsArray, "in beer list");

  useEffect(() => {
    getData(setData);
    getBeers(setBeers);

    setInterval(() => {
      getData(setData);
    }, 10000);
    getData(setData);
  }, []);

  return (
    <main>
      {beerItemsArray.map((item) => {
        return (
          <Beer
            key={item.id}
            {...item}
            cartItems={props.cartItems}
            editCartItems={props.editCartItems}
          />
        );
      })}
      {/* {beerItemsArray.map((item) => {
        beersDetailsArray.forEach((beer) => {
          if (item.beer === beer.name) {
            return (
              <Beer
                key={item.id}
                {...item}
                beer={beer}
                cartItems={props.cartItems}
                editCartItems={props.editCartItems}
              />
            );
          }
        });
      })} */}
    </main>
  );
}
