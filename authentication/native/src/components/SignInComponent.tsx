import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../stylesheets/styles";

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

  handleChangeEmail = (email: string) => {
    this.setState({ email });
  };

  handleChangePassword = (password: string) => {
    this.setState({ password });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.onClick(email, password);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textLabel}>Email Address:</Text>
          <TextInput
            style={styles.textInput}
            autoFocus
            autoCapitalize="none"
            blurOnSubmit={false}
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
        <Button onPress={this.handleSubmit} title="Sign In" color="#841584" />
      </View>
    );
  }
}
