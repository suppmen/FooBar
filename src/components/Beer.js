import React, { useState } from "react";
import Popup from "./Popup";
import beerImages from "./BeerImages";
// import  rating_star  from "../media/rating_star.svg";
import Stars from "../icon-componenets/Stars"



export default function Beer(props) {
  const filteredBeers = props.beers.filter(
    (beer) => beer.name === props.item.name
  );
  const beerDetails = filteredBeers[0];
 
  const handleIncrement = () => {
    props.editCartItems(props.item.name, 1);
  };

  const handleDecrement = () => {
    if (props.item.amount >= 1) {
      props.editCartItems(props.item.name, -1);
    }
  };
  
// From https://github.com/cluemediator/react-popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  const handleToggle = () => {
    props.ratingToggle(props.item.name);
  };




  return (
    <article >
      <div className="BeersList">

      <div className={props.item.isStar ? "star-yellow" : "star"}>
      <Stars className="ratingImg"  onClick={handleToggle}/>
        
        </div>
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
          return<div key={index}></div>
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
