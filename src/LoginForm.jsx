import React, { Component, createRef } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username:"", password: "" },
  };

  //   username = React.createRef();

  /* 
  componentDidMount() {
    this.username.current.focus();
  } */

  handleSubmit = (e) => {
    e.preventDefault();

    //call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container mt-5">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            type="text"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={account.password}
            onChange={this.handleChange}
          />

          {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              ref={this.password}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div> */}
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
