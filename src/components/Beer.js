import React, { useState } from "react";
import Popup from "./Popup";
import beerImages from "./BeerImages";

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
    if (props.amount >= 1) {
      props.editCartItems(props.name, -1);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <div className="BeersList">
        <h2>{props.item.name}</h2>

        {beerImages.map((beerImage) => {
          if (props.item.name === beerImage.name) {
            return (
              <img
                className="cart-img"
                src={process.env.PUBLIC_URL + beerImage.linkImg}
              />
            );
          }
        })}
      </div>
      <div className="beer-buttons">
        <div className="beer-buttons-add-remove">
          <h2>{props.item.name}</h2>
          {/* <p>Category: {beerDetails.category}</p>} */}
          <button onClick={handleIncrement}>+</button>
          {props.item.amount}

          <button onClick={handleDecrement}>-</button>
        </div>
      </div>

      <input type="button" value="See Details" onClick={togglePopup} />
      <duv />
      {isOpen && <Popup beerDetails={beerDetails} handleClose={togglePopup} />}
    </article>
  );
}
