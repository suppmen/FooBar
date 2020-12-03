// import React, { useState, useEffect } from "react";
import BeerList from "../components/BeerList";
import Header from "../components/Header";

export default function Shop(props) {
  return (
    <div className="Shop">
      <Header />
      <section className="beerListCenter">
        <h2>Beers List</h2>
        {
          <BeerList
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
