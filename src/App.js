import React, { useState, useEffect } from "react";
import { getData } from "./modules/Rest";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);

  function editCartItems(item) {
    let nextState = cartItems.concat(item);
    console.log(nextState, "mext state items");
    // let newItems;
    setCartItems(nextState);

    // if (cartItems.length > 1) {
    //   nextState.forEach((e, index) => {
    //     let counter = 0;
    //     let currentElement = nextState[counter];
    //     for (let j = index; j < nextState.length - 1; j++) {
    //       let nextElement = nextState[j + 1];
    //       if (currentElement.itemName === nextElement.itemName) {
    //         console.log(nextElement, currentElement, "double item");
    //         newItems = nextState.filter((beer) => {
    //           return beer.count === nextElement.count;
    //         });

    //         console.log(newItems, "new items");
    //       } else {
    //       }
    //     }
    //   });
    //   let filter = nextState.filter((e) => {
    //     if (newItems.length > 1) {
    //       return e.itemName !== newItems[0].itemName;
    //     }
    //   });
    //   nextState = filter.concat(newItems);
    //   setCartItems(nextState);
    // } else {
    //   setCartItems(nextState);
    // }

    // console.log(newItems, "new items");
    console.log("cartItems is:", cartItems);
  }

  // useEffect(() => {
  //   getData(setData);
  //   // getBeers(setBeers);

  //   setInterval(() => {
  //     getData(setData);
  //   }, 10000);
  //   getData(setData);
  // }, []);

  return (
    <div className="App">
      {/* {!data.bar && <Loader />} */}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Beers</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/shop">
              <Shop
                // data={data}
                cartItems={cartItems}
                editCartItems={editCartItems}
              />
            </Route>
            <Route path="/cart">
              {cartItems && <Cart cartItems={cartItems} />}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
