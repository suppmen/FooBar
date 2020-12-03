import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          Back to Beers
        </span>
        {props.beerDetails.name}
      </div>
    </div>
  );
};

export default Popup;
