import * as React from "react";
import { User } from "core";
import { Text, View } from "react-native";
import { styles } from "../stylesheets/styles";

interface PropsType {
  user: User | null;
}

export const UserComponent = (props: PropsType) => {
  return props.user ? (
    <View style={styles.centerContainer}>
      <Text style={[styles.textLabel, styles.welcome]}>
        Name is: {props.user.name}
      </Text>
      <Text style={[styles.textLabel, styles.welcome]}>
        Email is: {props.user.email}
      </Text>
    </View>
  ) : (
    <Text style={[styles.textLabel, styles.centerContainer, styles.welcome]}>
      No user logged in
    </Text>
  );
};
