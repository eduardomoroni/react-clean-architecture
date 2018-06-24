import * as React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/styles";

interface PropsType {
  onClick: () => void;
}

export const SignOutButton = (props: PropsType) => (
  <TouchableOpacity style={styles.button} onPress={props.onClick}>
    <Text>Sign Out</Text>
  </TouchableOpacity>
);
