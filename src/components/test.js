import React from "react";
import Beer from "./Beer";


export default function BeerList(props) {
  const beerItemsArray =  props.cartItems
  beerItemsArray.push({name: "Row 26", amount: 0, isStar: false});





  const newbeerItemsArray = beerItemsArray.map((item) => {
        return item.name;
      });
 
      console.log(newbeerItemsArray)
  var filteredNewbeerItemsArray =  newbeerItemsArray.sort().filter( function(item,i,arr){
     return (i===0) || ( item !== arr[i-1] );
  });
console.log(filteredNewbeerItemsArray)

const itemsToShow = filteredNewbeerItemsArray.map(item =>{
  return {name: item ,amount: 0, isStar:false }
})
  
  return (
    <div>
    <section className="beerCartWrapper">
      
      {beerItemsArray &&
        itemsToShow.map((item, index) => {
           console.log(item)
          return (
            <Beer
              key={index}
              item= {item}
              data={props.data}
              beers={props.beers}
              editCartItems={props.editCartItems}
              ratingToggle={props.ratingToggle}
            />
          );
        })}
    </section>
  
    </div>
  );
}
