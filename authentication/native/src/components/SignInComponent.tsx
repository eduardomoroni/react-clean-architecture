import * as React from "react";
import {Button, TextInput, View} from "react-native";

interface PropsType {
  onClick: (email: string, password: string) => void,
}

interface StateType {
  email: string,
  password: string,
}

export class SignInComponent extends React.Component<PropsType, StateType> {
  state = {
    email: 'email@email.com',
    password: 'abc123',
  };

  handleChangeEmail = (email: string) => {
    this.setState({email});
  };

  handleChangePassword = (password: string) => {
    this.setState({password});
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.onClick(email, password);
  };

  render() {
    return (
      <View>
        <TextInput
          autoFocus
          autoCapitalize="none"
          blurOnSubmit={false}
          keyboardType="email-address"
          onChangeText={this.handleChangeEmail}
          placeholder="Email address"
          value={this.state.email}
        />
        <TextInput
          onChangeText={this.handleChangePassword}
          onSubmitEditing={this.handleSubmit}
          placeholder="Password"
          returnKeyType={'done'}
          secureTextEntry
          value={this.state.password}
        />
        <Button
          onPress={this.handleSubmit}
          title="Sign In"
          color="#841584"
        />
      </View>
    );
  }
}
