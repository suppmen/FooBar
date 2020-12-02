// import React, { useState, useEffect } from "react";
import BeerList from "../components/BeerList";

export default function Shop(props) {
  return (
    <section>
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
  );
}
