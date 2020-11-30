
import React, {useState} from "react";
import ExpirationDate from "./ExpirationDate";

export default function OldForm(){
    const [cardNumber, setCardNumber]= useState("");
    const [cvv, setCvv]= useState("");
    const [name, setName]= useState("");

    return(
        <section>
            <form className="Form">
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
                 <button type="submit">PLACE ORDER</button>
                 <button>CANCEL</button>
            </div>

        </section>

    )
}

