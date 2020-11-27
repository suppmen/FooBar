import React from "react";


export default function Beer(props) {
 
  return (
    <div>
      <h2>Beer Name is : {props.name}</h2>
      <p>Beer category is : {props.category}</p>
    </div>
  );
}
