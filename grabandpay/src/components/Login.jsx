import React, { Component } from "react";
import logo from "../images/App logo.png";
import icon from '../images/shopping cart (2).png';
import { Link } from 'react-router-dom';
import "../index.css";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  render() {
    return (
      <div>
        <img src={logo} className="login-logo" alt="app logo" />
        <img src={icon} className="login-icon" alt="app icon" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="example@gmail.com" />
          </div>
          <div className="input-group-1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="**********"/>
          </div>
          <Link to='/supermarkets' className="primary">LOGIN</Link>
        </form>
      </div>
    );
  }
}

export default Login;