
import React from "react";
import Form from "../components/Form";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Order() {

    return(
      <section>
        <h2>Order</h2>
        <p>Her you will see your order</p>
        <Router>
          <div>
            <button>
              <Link to="/pay">Pay</Link>
            </button>
           <Switch>
              <Route path="/pay">
                <Pay />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    ) 
  }



  function Pay() {
    return(
        <section>
             <Form/>
        </section>
    ) 
  }