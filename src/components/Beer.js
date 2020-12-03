import React, { useState } from "react";
import Popup from "./Popup";

// From https://github.com/cluemediator/react-popup

export default function Beer(props) {
  const filteredBeers = props.beers.filter(
    (beer) => beer.name === props.item.name
  );
  const beerDetails = filteredBeers[0];
  console.log(filteredBeers, " in beer");
  const handleIncrement = () => {
    props.editCartItems(props.name, 1);
  };

  const handleDecrement = () => {
    props.editCartItems(props.name, -1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <h2>{props.item.name}</h2>
      {/* <p>Category: {beerDetails.category}</p>} */}
      <button onClick={handleIncrement}>+</button>
      {props.item.amount}
      <button onClick={handleDecrement}>-</button>
      <input type="button" value="See Details" onClick={togglePopup} />
      {isOpen && <Popup beerDetails={beerDetails} handleClose={togglePopup} />}
    </article>
  );
}
