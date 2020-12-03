import React from "react";
import arrow from "./arrow.svg";
import cart from "./beer.svg";
import beerImages from "./BeerImages";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <img
        className="arrow"
        alt="arrow"
        src={arrow}
        onClick={props.handleClose}
      />
      <img src={cart} alt="Cart" className="cart" />
      <div className="beerTop">
        <h2 className="beerName">{props.beerDetails.name}</h2>
        <h3 className="category">{props.beerDetails.category}</h3>
      </div>
      {beerImages.map((beerImage, index) => {
        if (props.beerDetails.name === beerImage.name) {
          return (
            <img
              key={index}
              className="popup-img"
              alt="beerImage"
              src={process.env.PUBLIC_URL + beerImage.linkImg}
            />
          );
        }
        return <div></div>;
      })}
      <div className="box">
        <h1>Details</h1>
        <p>{props.beerDetails.description.overallImpression}</p>
        <p>{props.beerDetails.description.aroma}</p>
        <p>{props.beerDetails.description.flavor}</p>
        <div className="boxes">
          <div className="small-box">
            <p>
              Alcohol:
              <br></br>
              <span>{props.beerDetails.alc}</span>
            </p>
          </div>
          <div className="small-box">
            <p>
              Stars:
              <br></br>
              <span>{props.beerDetails.popularity}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
