import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";

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
        <label>Card Number</label>
        <InputMask mask="9999-9999-9999-9999" maskPlaceholder=" " name="card_number" ref={register({ required: true})}/>
        {errors.card_number && 'Card number is required.'}
      </div>

      <div>
        <label>Expire</label>
        <InputMask mask="99/99" maskPlaceholder="MM/YY" name="expire" ref={register({ required: true })}/>
        {errors.expire && 'Enter month and year'}
      </div>
     
       <div>
         <label>CVV</label>
       <input name="cvv"  ref={register({ required: true, maxLength: 3, minLength:3, pattern: /\d+/})} />
       {errors.cvv && 'Enter a number of three digits.'}
       </div>

       {/* <div>
         <label>CVV</label>
         <InputMask mask="999" maskPlaceholder="cvv" name="cvv"  ref={register({ required: true})} />
         {errors.cvv && 'Enter a number of three digits.'}
       </div> */}

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