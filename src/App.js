
import React, {useState, useEffect} from "react";
import { getData, getBeers } from "./modules/Rest";
import Home from "./pages/Home";
import BeersList from "./pages/BeersList";
import Order from "./pages/Order";
import Loader from "./components/Loader";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});
  
  useEffect(() => {
    getData(setData);
   getBeers(setBeers);

   setInterval(() => {
     getData(setData);
   }, 10000);
      getData(setData);
  }, []); 


  return (
    <div className="App">
      {!data.bar && <Loader />}

      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beersList">Beers</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Switch>
          <Route path="/beersList">
            <BeersList  data={data}  beers={beers} />
          </Route>
          <Route path="/order">
            <Order />
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
