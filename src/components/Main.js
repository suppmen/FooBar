import React from "react";
import Beer from "./Beer";

export default function Main(props) {
 
  const closing = props.data.bar.closingTime;
  const beerArray = props.beers;



  return (
    <section>
      <main>
        
        <p>we close at :{closing}</p>
        {beerArray.map((beer) => {
          // return <Beer key={beer.name} name={beer.name} category={beer.category} />;
          return <Beer key={beer.name} {...beer} />;
        })}
      </main>
    </section>
  );
}
