import React, {useState} from 'react';
import Cleave from 'cleave.js/react';

export default function CreditCard() {

   const [number, setNumber]= useState ("");

    function onCreditCardChange(event) {
        // formatted pretty value
        console.log(event.target.value);
        setNumber(event.target.value)

        // raw value
        console.log(event.target.rawValue);
    }

    function onCreditCardFocus(event) {
        // update some state
    }

 
        return (
            <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                onFocus={onCreditCardFocus}
                onChange={onCreditCardChange} />
        );
  
}

