import React from "react";
import Beer from "./Beer";


export default function BeerList(props) {
  const beerItemsArray = props.cartItems;

  let counter = 0;
  for (let i = 0; i < beerItemsArray.length; i++) {
    let currentElement = beerItemsArray[counter];
    for (let j = i; j < beerItemsArray.length; j++) {
      let nextElement = beerItemsArray[j + 1];
      if (currentElement === nextElement) {
        beerItemsArray.splice(1, nextElement)
      } else {
        console.log(false, counter, currentElement, nextElement, j);
      }
    }
    counter++;
  }
  return (
    <div>
    <section className="beerCartWrapper">
      {beerItemsArray &&
        beerItemsArray.map((item, index) => {
       
          return (
            <Beer
              key={index}
              item= {item}
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
