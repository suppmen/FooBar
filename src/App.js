import React, { useState, useEffect } from "react";
import { getData, getBeers, postOrder } from "./modules/Rest";
import Start from "./pages/Start";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Message from "./pages/Message";
import Nav from "./components/Nav";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App(props) {
  const [showNav, setShowNav] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const [message, setMessage] = useState("");

  const [beers, setBeers] = useState([]);
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);

  function sendPostRequest(order) {
    //this function is called from Form
    postOrder(order, sendMessage);
  }

  // Showing notifications
  let notificationsCount;
  if (cartItems.length > 1) {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.amount;
    notificationsCount = cartItems.reduce(reducer, 0);
  }

  function ratingToggle(name) {
    //matching the name to the item in map
    const nextItems = cartItems.map((item) => {
      if (item.name === name) {
        // chacking if the star is false, if it is, set it to true, else set it to false
        !item.isStar ? (item.isStar = true) : (item.isStar = false);
      }
      return item;
    });

    console.log(nextItems, "nextItem");
    setCartItems(nextItems);
  }

  function editCartItems(name, modifier) {
    const nextItems = cartItems.map((item) => {
      if (item.name === name) {
        item.amount += modifier;
      }
      return item;
    });
    setCartItems(nextItems);
  }

  const sendMessage = (data) => {
    console.log("sucsesssssssssssssssssssssssssssssssss", data);
    setMessage(data);
    setIsPosted(true);
  };
  useEffect(() => {
    getData(setData, setCartItems);
    getBeers(setBeers);
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="nav">
          {showNav && <Nav />}

          <Switch>
            <Route path="/message">
              <Message message={message} setShowNav={setShowNav} />
            </Route>
            <Route path="/payment">
              {isPosted ? (
                <Redirect to="/message" />
              ) : (
                <Payment
                  setShowNav={setShowNav}
                  notificationsCount={notificationsCount}
                  sendPostRequest={sendPostRequest}
                  cartItems={cartItems}
                />
              )}
            </Route>
            <Route path="/shop">
              <Shop
                setShowNav={setShowNav}
                notificationsCount={notificationsCount}
                data={data}
                beers={beers}
                cartItems={cartItems}
                editCartItems={editCartItems}
                ratingToggle={ratingToggle}
              />
            </Route>
            <Route path="/cart">
              <Cart
                notificationsCount={notificationsCount}
                data={data}
                beers={beers}
                cartItems={cartItems}
                editCartItems={editCartItems}
                sendPostRequest={sendPostRequest}
              />
            </Route>
            <Route path="/">
              <Start
                setShowNav={setShowNav}
                data={data}
                beers={beers}
                cartItems={cartItems}
                editCartItems={editCartItems}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
