import * as React from "react";
import { ChangeEvent } from "react";
import "../stylesheets/App.css";

interface PropsType {
  onClick: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => void;
}

interface StateType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class SignUpComponent extends React.Component<PropsType, StateType> {
  state = {
    firstName: "EduarDO",
    lastName: "MoRoNi",
    email: "email@email.com",
    password: "abc123",
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name: string = event.target.name;

    // @ts-ignore
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { email, password, firstName, lastName } = this.state;
    this.props.onClick(firstName, lastName, email, password);
  };

  render() {
    return (
      <form>
        <label>
          firstName:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          lastName:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="button" onClick={this.handleSubmit}>
          SIGN UP
        </button>
      </form>
    );
  }
}
