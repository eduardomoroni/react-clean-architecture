import * as React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../stylesheets/styles";

interface Props {
  counter: number;
  decrement: () => void;
  increment: () => void;
}

export const CounterComponent = (props: Props) => {
  return (
    <View>
      <Text style={styles.instructions}>Counter is: {props.counter}</Text>
      <Button
        onPress={props.increment}
        title="Click to increment"
        color="#841584"
      />
      <Button
        onPress={props.decrement}
        title="Click to decrement"
        color="#841584"
      />
    </View>
  );
};
