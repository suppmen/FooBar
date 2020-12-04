import React, { useState, useEffect } from "react";
import { getData, getBeers } from "./modules/Rest";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import cartImg from "./media/cart.svg";
import homeImg from "./media/home.svg";
import shopImg from "./media/shop.svg";

function App() {
  const [beers, setBeers] = useState([]);
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  let notificationsCount;
  if (cartItems.length > 1) {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.amount;
    notificationsCount = cartItems.reduce(reducer, 0);
    console.log(notificationsCount, "in app");
  }

  console.log(cartItems);
  function editCartItems(name, modifier) {
    const nextItems = cartItems.map((item) => {
      if (item.name === name) {
        item.amount += modifier;
      }
      return item;
    });
    setCartItems(nextItems);
  }

  useEffect(() => {
    getData(setData, setCartItems);
    getBeers(setBeers);
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img className="homeImg" src={homeImg} alt="homeImg" />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <img className="shopImg" src={shopImg} alt="shopImg" />
                  <p>Shop</p>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <img className="cartImg" src={cartImg} alt="cart" />

                  <p>Cart</p>
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/shop">
              <Shop
                notificationsCount={notificationsCount}
                data={data}
                beers={beers}
                cartItems={cartItems}
                editCartItems={editCartItems}
              />
            </Route>
            <Route path="/cart">
              <Cart
                data={data}
                beers={beers}
                cartItems={cartItems}
                editCartItems={editCartItems}
              />
            </Route>
            <Route path="/">
              <Home
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
