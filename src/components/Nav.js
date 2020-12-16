import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import CartIcon from "../icon-componenets/Cart";
import HomeIcon from "../icon-componenets/Home";
import ShopIcon from "../icon-componenets/Shop";

// Theme changer
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../modules/theme";
import { GlobalStyles } from "../modules/global";
import Toggle from "../components/Toggle";

function Nav() {
  const [theme, setTheme] = useState("dark");

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
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon className="navIcon" /> <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/shop">
            <ShopIcon className="navIcon" />
            <p>Shop</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/cart">
            <CartIcon className="navIcon" />
            <p>Cart</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
