import React from "react";
import Form from "../components/Form";

export default function Payment(props) {
  const itemsArray = props.cartItems.filter((beer) => beer.amount > 0);

  console.log(
    itemsArray,
    "Iam in paymentttttttttttttttttttttttttttttttttttttttttttttttttttttt"
  );
  return (
    <section>
      <h1>I am payment page</h1>
      <Form postPayload={props.postPayload} itemsArray={itemsArray} />
    </section>
  );
}
