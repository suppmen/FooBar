// import React, { useState, useEffect } from "react";
import BeerList from "../components/BeerList";
import Header from "../components/Header";

export default function Shop(props) {
  props.setShowNav(true);
  return (
    <div className="Shop">
      <Header
        beers={props.beers}
        data={props.data}
        cartItems={props.cartItems}
        editCartItems={props.editCartItems}
        notificationsCount={props.notificationsCount}
      />
      <section className="beerListCenter">
        {
          <BeerList
            setShowNav={props.setShowNav}
            updateRating={props.updateRating}
            stars={props.stars}
            beers={props.beers}
            data={props.data}
            cartItems={props.cartItems}
            editCartItems={props.editCartItems}
          />
        }
      </section>
    </div>
  );
}
