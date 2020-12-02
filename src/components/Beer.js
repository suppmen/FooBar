import React, { useState } from "react";
import Popup from "./Popup";
import beerImages from "./BeerImages";


// From https://github.com/cluemediator/react-popup

export default function Beer(props) {
  const handleIncrement = () => {
    props.editCartItems(props.name, 1);
  };

  const handleDecrement = () => {
    if(props.amount >= 1){
    props.editCartItems(props.name, -1);}
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <article >
      <div className="BeersList">
      <h2>{props.name}</h2>
      
     { beerImages.map(beerImage => {
          if( props.name === beerImage.name){
          return <img className="cart-img" src={ process.env.PUBLIC_URL + beerImage.linkImg} />;
          }
        })}
     
      </div>
      <div className="beer-buttons">
      <div className="beer-buttons-add-remove">
      <button onClick={handleDecrement}>-</button>
      {props.amount}
      <button onClick={handleIncrement}>+</button>
      </div>

      <input type="button" value="See Details" onClick={togglePopup} />
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <b>{props.name}</b>
              {/* <p>{props.description.overallImpression}</p>
              <p>{props.description.appearance}</p>
              <p>{props.description.mouthfeel}</p> */}
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </article>
  );
}
