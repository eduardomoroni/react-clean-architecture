import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../stylesheets/styles";

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
    email: "other_email@fooemail.com",
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
      <View style={{ flex: 2 }}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textLabel}>First Name:</Text>
          <TextInput
            style={styles.textInput}
            autoFocus
            onChangeText={this.handleChangeFirstName}
            placeholder="First Name"
            value={this.state.firstName}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textLabel}>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChangeLastName}
            placeholder="Last Name"
            value={this.state.lastName}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textLabel}>Email Address:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            onChangeText={this.handleChangeEmail}
            placeholder="Email address"
            value={this.state.email}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textLabel}>Password:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChangePassword}
            onSubmitEditing={this.handleSubmit}
            placeholder="Password"
            returnKeyType={"done"}
            secureTextEntry
            value={this.state.password}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Sign Up" color="#841584" />
      </View>
    );
  }
}
