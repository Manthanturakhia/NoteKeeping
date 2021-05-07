import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <div className="app__container">
              <h1 align="center">Points System</h1>
              {/* <div className="app__button"> */}
              <Link to="/login">
                {/* <Button  variant="contained" >
                LOGIN
                </Button> */}
                <button>Login</button>
              </Link>
              <br />
              <br />
              <Link to="/register">
                <button>Register</button>
              </Link>

              {/* </div> */}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
