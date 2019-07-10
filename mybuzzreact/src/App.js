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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communities: "",
      email: "",
      password: "",
      confirmpass: "",
      isLoggedIn: false,
      error: ""
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogOut(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
    console.log("User has been logged out");
    var username = localStorage.getItem("username");
    console.log(username);
    this.props.history.push("/login");
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post(backendUrl + "users/signup", {
        email: this.state.email,
        password: this.state.password,
        confirmpass: this.state.confirmpass
      })
      .then(response => {
        if (response.data.error) {
          console.log(response.data.error);
          this.setState({ error: response.data.error });
        } else {
          localStorage.token = response.data.token;
          this.setState({ isLoggedIn: true });
          console.log("User has signed up");
          localStorage.setItem("username", this.state.email);
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(backendUrl + "users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response.data.error) {
          console.log(response.data.error);
          this.setState({ error: response.data.error });
        } else {
          localStorage.token = response.data.token;
          this.setState({ isLoggedIn: true });
          console.log("User is logged in");
          localStorage.setItem("username", this.state.email);
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
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
}

export default withRouter(App);
