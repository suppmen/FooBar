import React, { useEffect, useReducer } from "react";

// Countdown timer inspired from:
// https://www.seangroff.dev/useeffect-state-trap/
// https://codesandbox.io/s/timer-with-usereducer-hyydd?file=/src/index.js:596-658
// https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7

const initialState = { seconds: 0, minutes: 5 };

const reducer = (state, action) => {
  switch (action.type) {
    case "startCountDown":
      return { ...state, seconds: action.payload };
    case "startMinutesCountDown":
      return { ...state, minutes: action.payload };
    case "roundSeconds":
      return { ...state, seconds: action.payload };
    default:
      throw new Error();
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.seconds > 0) {
        dispatch({ type: "startCountDown", payload: state.seconds - 1 });
      }
      if (state.seconds === 0) {
        if (state.minutes === 0) {
          clearInterval(interval);
        } else {
          dispatch({
            type: "startMinutesCountDown",
            payload: state.minutes - 1,
          });

          dispatch({ type: "roundSeconds", payload: 59 });
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      {state.minutes === 0 && state.seconds === 0 ? (
        <h1 className="timer">
          Your order is ready, go and pick it up at the bar!
        </h1>
      ) : (
        <h1 className="timer">
          Estimated time remaining: {state.minutes}:
          {state.seconds < 10 ? `0${state.seconds}` : state.seconds}
        </h1>
      )}
    </div>
  );
};

export default function SideBar(props) {
  function closeBar() {
    console.log(props);
    props.toggeleSidebar();
    console.log("closed");
  }
  return (
    <div className={props.open ? "open sidebar" : "sidebar"}>
      <button onClick={closeBar}>x</button>
      <div className="title">
        {props.message && <h1>Your order is on the way</h1>}
        {!props.message && <h1>You will see your order status here</h1>}
      </div>

      <div className="sent-order">
        {props.message && (
          <h1>
            Your order id is:
            <span className="order-message-id"> #{props.message.id}</span>
          </h1>
        )}
        {props.sentOrder &&
          props.sentOrder.map((item, index) => {
            return (
              <h1 key={index}>
                <span className="ordered-beers">{item.name}</span>
              </h1>
            );
          })}
        <div>
          <Timer />
        </div>
        <p>Follow your order id on the bars dashboard</p>
      </div>
    </div>
  );
}
