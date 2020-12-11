import React from "react";
import { useForm } from "react-hook-form";
import arrow from "../media/long-arrow.svg";
import cart from "../media/cart.svg";
import { Link } from "react-router-dom";

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
  return value.substr(0, 4);
};

// const normalizeYear = (value) => {
//   return value.substr(0, 2);
// };

export default function Form(props) {
  const itemsArray = props.cartItems.filter((beer) => beer.amount > 0);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.sendPostRequest(itemsArray);
  };

  return (
    <div className="paym">
      <div className="total-price">
        <img className="payment-cart" src={cart} alt="cart" />
        <h2>= 45 DKK</h2>
      </div>

      <div className="formbox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Checkout</h1>

          <div>
            <input
              name="name"
              ref={register({ required: "*Required" })}
              placeholder="&nbsp;"
              type="text"
            />
            <label>Full Name</label>
          </div>
          {errors.name && <p>{errors.name.message}</p>}

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
              ref={register({
                required: "*Required",
                minLength: { value: 19, message: "Verify number" },
              })}
            />
            <label htmlFor="cardNumber">Card Number</label>
          </div>
          {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

          <div className="expirationDate">
            <div className="small-div1">
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
                  ref={register({
                    required: "*Required",
                    minLength: { value: 4, message: "Verify number" },
                    pattern: /\d+/,
                  })}
                />
                <label htmlFor="month">mm/yy</label>
              </div>
              {errors.month && <p>{errors.month.message}</p>}
            </div>

            {/* <div className="small-div">
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
                  ref={register({
                    required: "*Required",
                    minLength: { value: 2, message: "Verify number" },
                    pattern: /\d+/,
                  })}
                />
                <label htmlFor="year">yy</label>
              </div>
              {errors.year && <p>{errors.year.message}</p>}
            </div> */}

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
                  ref={register({
                    required: "*Required",
                    minLength: { value: 3, message: "Verify number" },
                    pattern: /\d+/,
                  })}
                />
                <label htmlFor="cvv">cvv</label>
              </div>
              {errors.cvv && <p>{errors.cvv.message}</p>}
            </div>
          </div>

          <div className="payment-end">
            <input className="submit" type="submit" value="Pay Now" />
          </div>
          <Link to="/shop" className="continue">
            <img className="back-arrow-dark" src={arrow} alt="arrow" />
            Continue Shopping
          </Link>
        </form>
      </div>
    </div>
  );
}
