import React from "react";
import beerImages from "./BeerImages";
import bin from "../media/recycle-bin.svg";

export default function CartItem(props) {
  const handleIncrement = () => {
    props.editCartItems(props.name, 1);
  };

  const handleDecrement = () => {
    if (props.amount >= 1) {
      props.editCartItems(props.name, -1);
    }
  };

  const remove = () => {
    console.log("Remove", props.amount);
    props.editCartItems(props.name, -props.amount);
  };
  return (
    <div className="CartItem">
      <img src={bin} className="bin" alt="bin" onClick={remove} />
      {beerImages.map((beerImage, index) => {
        if (props.name === beerImage.name) {
          return (
            <img
              key={index}
              className="cart-img"
              alt="beerImage"
              src={process.env.PUBLIC_URL + beerImage.linkImg}
            />
          );
        }
        return <div></div>;
      })}

      <h1 className="beer-name">{props.name}</h1>

      <div className="cart-add-remove-btn">
        <button className="down" onClick={handleDecrement}>
          -
        </button>
        {props.amount}
        <button className="up" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
