import React , { useEffect } from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import Register from "./Register"
import Payment from "./Payment"
import Orders from "./Orders"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51IMiWTEutSapc6cGXenL9vy1JVbLbtAOEhZiTAXW12Z5WobBNLhKLcJvI3SuGYRg1G705tpR2Vpr2tQuIZyR4bnb00xTfE2zQp");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>  

          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>  

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements> 
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
