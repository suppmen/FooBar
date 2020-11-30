import React, { useState, useEffect } from "react";
import Main from "../components/Main";

export default function BeersList(props) {
  return (
    <section>
      <h2>Beers List</h2>
      {
        <Main
          data={props.data}
          cartItems={props.cartItems}
          editCartItems={props.editCartItems}
        />
      }
    </section>
  );
}
