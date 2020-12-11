import React, { useState, useEffect } from "react";
import { getData, getBeers, postOrder } from "./modules/Rest";
import { post, get, put } from "./modules/restdb";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Loader from "./components/Loader";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cartImg from "./media/cart.svg";
import homeImg from "./media/home.svg";
import shopImg from "./media/shop.svg";

// Theme changer
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./modules/theme";
import { GlobalStyles } from "./modules/global";
import Toggle from "./components/Toggle";

function App() {
  const [theme, setTheme] = useState("light");

  const [beers, setBeers] = useState([]);
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);

  // Rating states
  const [beersRating, setBeersRating] = useState([]);
  const [rating, setRating] = useState(0);

  // Rating
  function updateRating(beerName, newRating) {
    if (beersRating.length > 1) {
      beerName = "Row 26";
      newRating = [5];
      console.log(beersRating);
      const beerToUpdate = beersRating.filter((item) => item.name === beerName);
      console.log(beerToUpdate);
      const newRatingList = beerToUpdate[0].ratingArray.concat(newRating);
      put(beerToUpdate[0]._id, newRatingList, setRating);
    }
  }
  // updateRating("El Hefe", 5);
  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  function sendPostRequest(order) {
    //this function is called from Form
    console.log("order from form", order);

    postOrder(order, sendMessage);
  }

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

  function sendMessage() {
    console.log("sucsesssssssssssssssssssssssssssssssss");
  }

  useEffect(() => {
    get(setBeersRating);
    getData(setData, setCartItems);
    getBeers(setBeers);
  }, []);

  return (
    <div className="App">
      <button onClick={updateRating}>Add 5 stars to hel hefe!</button>
      <Router>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <ThemeProvider
                  theme={theme === "light" ? lightTheme : darkTheme}
                >
                  <>
                    <GlobalStyles />
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                  </>
                </ThemeProvider>
              </li>
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
            <Route path="/payment">
              <Payment
                notificationsCount={notificationsCount}
                sendPostRequest={sendPostRequest}
                cartItems={cartItems}
              />
            </Route>
            <Route path="/shop">
              <Shop
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
