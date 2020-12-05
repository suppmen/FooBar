import React from "react";
import Form from "../components/Form";

export default function Payment(props) {

  return (
    <section>
      <h1>I am payment page</h1>
      <Form sendPostRequest={props.sendPostRequest}/>
    </section>
  );
}
