import React from "react";

export default function Queue(props) {
    const queueArray = props.data.queue;
    

    return (
      <div>
        <h2>There is {queueArray.length} person in line</h2>
      
        {queueArray.map((id) => {
    console.log(id)
    return <p>Ticket Number : {id.id}</p>;
        })}
      </div>
    );
  }