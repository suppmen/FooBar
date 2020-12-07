import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Payment(props) {

  return (
    <section>
      <Header notificationsCount={props.notificationsCount}/>
      <Form sendPostRequest={props.sendPostRequest} cartItems={props.cartItems}  />
    </section>
  );
}
