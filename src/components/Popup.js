import React, { useState } from "react";
import arrow from "../media/arrow.svg";
import beerImages from "./BeerImages";
import Star from "../icon-componenets/Star";

const Popup = (props) => {
  // Stars state to show the rating stars and thier value and to change the rating

  const [stars, setStars] = useState([
    { isMarked: false, number: 1 },
    { isMarked: false, number: 2 },
    { isMarked: false, number: 3 },
    { isMarked: false, number: 4 },
    { isMarked: false, number: 5 },
  ]);
  function rateBeer(event) {
    // Figuring out the rate
    let rate = event.currentTarget.getAttribute("data-rate");
    let rateArray = [parseInt(rate)];

    const nextStars = stars.map((star) => {
      if (star.number <= rate) {
        return { number: star.number, isMarked: true };
      } else {
        return { number: star.number, isMarked: false };
      }
    });
    setStars(nextStars);
    props.updateRating(props.beerDetails.name, rateArray);
  }
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }
  const round10 = (value, exp) => decimalAdjust("round", value, exp);

  return (
    <div className="popup-box">
      <img
        className="arrow"
        alt="arrow"
        src={arrow}
        onClick={props.handleClose}
      />

      <div className="beerTop">
        <h2 className="beerName">{props.beerDetails.name}</h2>
        <h3 className="category">{props.beerDetails.category}</h3>
        <h3 className="price">Price: 45,-</h3>
        
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
        return <div key={index}></div>;
      })}
      <div className="box">
        <h1>Details</h1>
        <p>{props.beerDetails.description.overallImpression}</p>
        <p>{props.beerDetails.description.aroma}</p>
        <p>{props.beerDetails.description.flavor}</p>
        <div className="rating">
          {stars &&
            stars.map((star, i) => {
              return (
                <Star
                  key={i}
                  className={
                    star.isMarked ? "star-yellow ratingImg" : "star ratingImg"
                  }
                  onClick={rateBeer}
                  data-rate={i + 1}
                />
              );
            })}
        </div>
        <div className="boxes">
          <div className="small-box">
            <p>
              Size:
              <br></br>
              <span>500ml</span>
            </p>
          </div>
          <div className="small-box">
            <p>
              Alcohol:
              <br></br>
              <span>{props.beerDetails.alc}</span>
            </p>
          </div>
          <div className="small-box">
            <p>
              Rating:
              <br></br>
              <span>{round10(props.item.rating, -1)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
