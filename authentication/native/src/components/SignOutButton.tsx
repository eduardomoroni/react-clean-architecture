import * as React from "react";
import {Button} from "react-native";

interface PropsType {
  onClick: () => void,
}

export const SignOutButton = (props: PropsType) => (
  <Button
    onPress={props.onClick}
    title="Sign Out"
    color="#841584"
  />
);
