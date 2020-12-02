import React from 'react';
import { useForm } from 'react-hook-form';

//from https://www.youtube.com/watch?v=fTCTtCv8iN8

const normalizeCardNumber = (value) =>{
  return value.replace(/\s/g, "")?.match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}
const normalizeCvvNumber = (value) =>{
  return value.substr(0, 3);
}


export default function Form(){

const { register, handleSubmit, errors } = useForm(); 
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>

<fieldset>
      <legend>Payment Details</legend>

      <div>
        <label htmlFor="cardNumber" >Card Number</label>
        <input
        placeholder="    -    -    -    "
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        name="cardNumber"
        id="cardNumber"
        onChange={(event) =>{
          const {value} = event.target
          event.target.value = normalizeCardNumber(value)
        }}
        ref={register({ required: true, minLength:19 })}
        />
          {errors.cardNumber && 'Enter the right number'}
      </div>

      <div>
        <label htmlFor="cvv">CVV</label>
        <input
        placeholder="cvv"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        name="cvv"
        id="cvv"
        onChange={(event) =>{
          const {value} = event.target
          event.target.value = normalizeCvvNumber(value)
        }}
        ref={register({ required: true, minLength:3 })}
        />
        {errors.cvv && 'Enter the right number'}
      </div>
    
      <div>
        <label>Titular name</label>
        <input name="name" ref={register({ required: true })} /> 
        {errors.name && 'Titular name is required.'}
      </div>

      <div>
          <input type="submit" />
      </div>
      </fieldset>
    </form>
  );
}