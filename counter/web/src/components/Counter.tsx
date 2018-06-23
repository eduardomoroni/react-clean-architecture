import * as React from "react";
import "../stylesheets/App.css";

interface IProps {
  counter: number;
  decrement: () => void;
  increment: () => void;
}

export const CounterComponent = (props: IProps) => {
  return (
    <div>
      <h1>Counter is: {props.counter}</h1>
      <h2 onClick={props.increment}>Click to Increment</h2>
      <h2 onClick={props.decrement}>Click to Decrement</h2>
    </div>
  );
};
