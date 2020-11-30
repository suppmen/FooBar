
import React from "react";
import Beer from "./Beer";

export default function Main(props) {
  const beerArray = props.beers;

  return (

      <main>
        {beerArray.map((beer) => {
          return <Beer key={beer.name} {...beer}/>;
        })}
      </main>
  );
}
