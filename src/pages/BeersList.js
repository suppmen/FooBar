
import React from "react";
import Main from "../components/Main";

export default function BeersList(props) {
    return(
      <section>
        <h2>Beers List</h2>
        {<Main data={props.data} beers={props.beers} cartItems={props.cartItems} editCartItems={props.editCartItems}/>}
     
      </section>
    ) 
  }