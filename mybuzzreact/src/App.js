import React from 'react';
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import Nav from "./Nav";
import Home from "./Home"
import User from "./User"

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
