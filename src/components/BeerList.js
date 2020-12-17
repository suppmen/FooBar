import React from "react";
import Beer from "./Beer";

export default function BeerList(props) {
  const beerItemsArray = props.cartItems;

  return (
    <div>
      <section className="beerCartWrapper">
        {beerItemsArray &&
          beerItemsArray.map((item, index) => {
            return (
              <Beer
                applayRating={props.applayRating}
                setShowNav={props.setShowNav}
                updateRating={props.updateRating}
                key={index}
                item={item}
                beers={props.beers}
                editCartItems={props.editCartItems}
              />
            );
          })}
      </section>
    </div>
  );
}
