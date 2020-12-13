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
                setShowNav={props.setShowNav}
                updateRating={props.updateRating}
                stars={props.stars}
                key={index}
                item={item}
                data={props.data}
                beers={props.beers}
                editCartItems={props.editCartItems}
                ratingToggle={props.ratingToggle}
              />
            );
          })}
      </section>
    </div>
  );
}
