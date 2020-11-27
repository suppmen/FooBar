import React, {useState} from "react";
import ExpirationDate from "./ExpirationDate";





export default function Form(){
    const [cardNumber, setCardNumber]= useState("");
    const [cvv, setCvv]= useState("");
    const [name, setName]= useState("");

    function clicked(e){
        e.preventDefault();

        const payload = { 
            name: "Row 26", 
            amount: 5 }

          postData(payload);

    }

    function postData(payload){
        console.log(payload);
        fetch("https://foo-bar-managers.herokuapp.com/order", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
            body: JSON.stringify(payload)
          })
            .then((e) => e.json())
        
    }

  



    return(
        <div>
            
        <form onSubmit={clicked} className="Form">
            <fieldset> 
                <legend>Payment Details</legend>
            <div>
                <label>Card Number
                    <input type="text" name="cardNumber" id="cardNumber" value={cardNumber} onInput={e=>setCardNumber(e.target.value)} required/>
                </label>
            </div>
            <div>
                
                <ExpirationDate  />
              
            </div>
           
          
            <div>
                <label>CVV
                    <input type="text" name="cvv" id="cvv" value={cvv} onInput={e=>setCvv(e.target.value)} />
                </label>
            </div>
            <div>
                <label>Titular Name
                    <input type="text" name="name" id="name" value={name} onInput={e=>setName(e.target.value)} />
                </label>
            </div>
           

            </fieldset>
        </form>
        <div>
                 <button type="submit" onClick={clicked}>Save</button>
                 <button>Cancel</button>
            </div>
        </div>

    )
}

