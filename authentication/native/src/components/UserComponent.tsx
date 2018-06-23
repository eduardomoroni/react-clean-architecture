import * as React from "react";
import { User } from "core";
import { Text, View } from "react-native";

interface PropsType {
  user: User | null;
}

export const UserComponent = (props: PropsType) => {
  return props.user ? (
    <View>
      <Text>Name is: {props.user.name}</Text>
      <Text>Email is: {props.user.email}</Text>
    </View>
  ) : (
    <Text>No user logged in</Text>
  );
};
