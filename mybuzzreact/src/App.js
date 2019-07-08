import React from 'react';
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import Nav from "./Nav";
import Home from "./Home"
import User from "./User"
import Signup from './Signup';
import Login from './Login';
import About from './About';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            path="/login"
            exact
            render={props => (
              <Login
                {...props}
              />
            )} />
          <Route
            path="/signup"
            exact
            render={props => (
              <Signup
                {...props}
              />
            )} />
          <Route
            path="/about"
            exact
            render={props => (
              <About
                {...props}
              />
            )} />
          <Route
            path="/user/:id"
            exact
            render={props => (
              <User
                {...props}
              />
            )} />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
