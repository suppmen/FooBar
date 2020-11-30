
import React from "react";
import Main from "../components/Main";

export default function BeersList(props) {
    return(
      <section className="beerListCenter">
        <h2 >Beeers List</h2>
        
        <Main beers={props.beers} />
    
      </section>
    ) 
  }