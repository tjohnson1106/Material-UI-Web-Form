import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <TextField
          name="first name"
          hintText="First Name"
          floatingLabelText="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="last name"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          type="email"
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          type="password"
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <RaisedButton
          label="submit"
          onClick={e => this.onSubmit(e)}
          primary
        />
      </form>
    );
  }
}

export default Form;
