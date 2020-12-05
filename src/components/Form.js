import React from "react";
import { useForm } from "react-hook-form";

//from https://www.youtube.com/watch?v=fTCTtCv8iN8

const normalizeCard = (value) => {
  return (
    value
      .replace(/\s/g, "")
      ?.match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};
const normalizeCvv = (value) => {
  return value.substr(0, 3);
};
const normalizeMonth = (value) => {
  return value.substr(0, 2);
};

const normalizeYear = (value) => {
  return value.substr(0, 2);
};

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.sendPostRequest();
   
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Checkout</h1>

      <div>
        <input
          name="name"
          ref={register({ required: true })}
          placeholder="&nbsp;"
          type="text"
        />
        <label>Full Name</label>
      </div>
      {errors.name && <p>*Full Name is required</p>}

      <div>
        <input
          placeholder="&nbsp;"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          name="cardNumber"
          id="cardNumber"
          onChange={(event) => {
            const { value } = event.target;
            event.target.value = normalizeCard(value);
          }}
          ref={register({ required: true, minLength: 19 })}
        />
        <label htmlFor="cardNumber">Card Number</label>
      </div>
      {errors.cardNumber && <p>*Card Number is required</p>}

      <div className="expirationDate">
        <div className="small-div">
          <div>
            <input
              className="month"
              placeholder="&nbsp;"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              name="month"
              id="month"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeMonth(value);
              }}
              ref={register({ required: true, minLength: 2, pattern: /\d+/ })}
            />
            <label htmlFor="month">mm</label>
          </div>
          {errors.month && <p>*Required</p>}
        </div>

        <div className="small-div">
          <div>
            <input
              className="year"
              placeholder="&nbsp;"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              name="year"
              id="year"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeYear(value);
              }}
              ref={register({ required: true, minLength: 2, pattern: /\d+/ })}
            />
            <label htmlFor="year">yy</label>
          </div>
          {errors.year && <p>*Required</p>}
        </div>

        <div className="small-div">
          <div>
            <input
              className="cvv"
              placeholder="&nbsp;"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              name="cvv"
              id="cvv"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeCvv(value);
              }}
              ref={register({ required: true, minLength: 3, pattern: /\d+/ })}
            />
            <label htmlFor="cvv">cvv</label>
          </div>
          {errors.cvv && <p>*Required</p>}
        </div>
      </div>

      <div>
        <input className="submit" type="submit" value="Pay Now" />
      </div>
    </form>
  );
}
