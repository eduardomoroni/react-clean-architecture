import * as React from "react";
import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "../stylesheets/styles";

interface Props {
  children: ReactNode;
}

export const AppWrapper = (props: Props) => {
  return <View style={styles.container}>{props.children}</View>;
};
