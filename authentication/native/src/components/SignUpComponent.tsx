import * as React from "react";
import { Button, TextInput, View } from "react-native";

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

  handleChangeEmail = (email: string) => {
    this.setState({ email });
  };

  handleChangePassword = (password: string) => {
    this.setState({ password });
  };

  handleChangeFirstName = (firstName: string) => {
    this.setState({ firstName });
  };

  handleChangeLastName = (lastName: string) => {
    this.setState({ lastName });
  };

  handleSubmit = () => {
    const { email, password, firstName, lastName } = this.state;
    this.props.onClick(firstName, lastName, email, password);
  };

  render() {
    return (
      <View>
        <TextInput
          autoFocus
          onChangeText={this.handleChangeFirstName}
          placeholder="First Name"
          value={this.state.firstName}
        />
        <TextInput
          onChangeText={this.handleChangeLastName}
          placeholder="Last Name"
          value={this.state.lastName}
        />
        <TextInput
          keyboardType="email-address"
          onChangeText={this.handleChangeEmail}
          placeholder="Email address"
          value={this.state.email}
        />
        <TextInput
          onChangeText={this.handleChangePassword}
          onSubmitEditing={this.handleSubmit}
          placeholder="Password"
          returnKeyType={"done"}
          secureTextEntry
          value={this.state.password}
        />
        <Button onPress={this.handleSubmit} title="Sign Up" color="#841584" />
      </View>
    );
  }
}
