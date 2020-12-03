import React, { useState } from "react";
import Popup from "./Popup";
import beerImages from "./BeerImages";

// From https://github.com/cluemediator/react-popup

export default function Beer(props) {
  const filteredBeers = props.beers.filter(
    (beer) => beer.name === props.item.name
  );
  const beerDetails = filteredBeers[0];
  console.log(beerDetails, " in beer");
  const handleIncrement = () => {
    props.editCartItems(props.item.name, 1);
  };

  const handleDecrement = () => {
    if (props.item.amount >= 1) {
      props.editCartItems(props.item.name, -1);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <div className="BeersList">
        {/* <h2>{props.item.name}</h2> */}

        {beerImages.map((beerImage, index) => {
          if (props.item.name === beerImage.name) {
            return (
             
              <img
                key={index}
                className="beer-tap-img"
                alt="beerImage"
                src={process.env.PUBLIC_URL + beerImage.linkImg}
              />
             
            );
          }
          return<div></div>
        })}
      <div className="beer-buttons">
        <div className="beer-buttons-add-remove">
          <button className="dec-btn" onClick={handleDecrement}>-</button>
          {props.item.amount}
          <button onClick={handleIncrement}>+</button>
        </div>
    
      <input type="button" value="See Details" onClick={togglePopup} />
     </div>
      </div>

      {isOpen && <Popup beerDetails={beerDetails} handleClose={togglePopup} />}
    </article>
  );
}
