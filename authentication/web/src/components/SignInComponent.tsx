import * as React from "react";
import { ChangeEvent } from "react";
import "../stylesheets/App.css";

interface PropsType {
  onClick: (email: string, password: string) => void;
}

interface StateType {
  email: string;
  password: string;
}

export class SignInComponent extends React.Component<PropsType, StateType> {
  state = {
    email: "email@email.com",
    password: "abc123",
  };

  handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
    event.preventDefault();
  };

  handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
    event.preventDefault();
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.onClick(email, password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <button type="button" onClick={this.handleSubmit}>
          SIGN IN
        </button>
      </form>
    );
  }
}
