import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cartImg from "../media/cart.svg";
import homeImg from "../media/home.svg";
import shopImg from "../media/shop.svg";

// Theme changer
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../modules/theme";
import { GlobalStyles } from "../modules/global";
import Toggle from "../components/Toggle";

function Nav() {
  const [theme, setTheme] = useState("light");

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

  return (
    <nav>
      <ul>
        <li>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
  );
}

export default Nav;
