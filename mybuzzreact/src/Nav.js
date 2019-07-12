import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-3">
            <a href="/" className="brand-logo right">
              <i className="material-icons">local_bar</i>Buzzin'</a>
            <a href="/" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i></a>
            <ul className="left hide-on-med-and-down">
              <li><Link to="/chart" className="sidenav-close">Chart</Link></li>
              {this.props.isLoggedIn === true && (
                <li><Link to="/" className="sidenav-close">Home</Link></li>)}
              {this.props.isLoggedIn === true && (
                <li><Link to="/logout" className="sidenav-close" onClick={this.props.handleLogOut}>Logout</Link></li>)}
              {this.props.isLoggedIn === false && (
                <li><Link to="/login" className="sidenav-close">Login</Link></li>)}
              {this.props.isLoggedIn === false && (
                <li><Link to="/signup" className="sidenav-close">Signup</Link></li>)}
              <li><Link to="/about" className="sidenav-close">About</Link></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav navside" id="mobile-nav">
          {this.props.isLoggedIn === true && (
            <li><Link to="/" className="sidenav-close">Home</Link></li>)}
          {this.props.isLoggedIn === true && (
            <li><Link to="/logout" className="sidenav-close" onClick={this.props.handleLogOut}>Logout</Link></li>)}
          {this.props.isLoggedIn === false && (
            <li><Link to="/login" className="sidenav-close">Login</Link></li>)}
          {this.props.isLoggedIn === false && (
            <li><Link to="/signup" className="sidenav-close">Signup</Link></li>)}
          <li><Link to="/about" className="sidenav-close">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
