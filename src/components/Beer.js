import React, { useState } from "react";
import Popup from "./Popup";
import App from "../App";

// From https://github.com/cluemediator/react-popup

export default function Beer(props) {
  const beerDetailsArray = props.beers.filter(
    (beer) => beer.name === props.beer
  );
  const beerDetails = { ...beerDetailsArray[0] };
  console.log(beerDetails, "beerDetails in beer");
  function editCartItem(itemName, count) {
    const item = {
      itemName,
      count,
    };
    console.log(itemName, count);
    props.editCartItems(item);
  }

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    let newCount = count + 1;
    setCount(newCount);
    editCartItem(props.name, newCount);
  };

  const handleDecrement = () => {
    let newCount = count - 1;

    setCount(newCount);

    editCartItem(props.name, newCount);
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <h2>{props.beer}</h2>
      {beerDetails && <p>Category: {beerDetails.category}</p>}

      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>

      <input type="button" value="See Details" onClick={togglePopup} />
      {isOpen && (
        <Popup
          content={
            <>
              <b>{props.name}</b>
              <p>{props.description.overallImpression}</p>
              <p>{props.description.appearance}</p>
              <p>{props.description.mouthfeel}</p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </article>
  );
}
