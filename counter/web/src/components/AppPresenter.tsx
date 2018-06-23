import {
  Counter,
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
  StateType,
} from "core";
import * as React from "react";
import "../stylesheets/App.css";
import { connect } from "react-redux";
import { Header } from "./Header";
import { CounterComponent } from "./Counter";
import { AppWrapper } from "./AppWrapper";

interface Props {
  counter: Counter;
  decrement: (qty: number) => void;
  increment: (qty: number) => void;
}

export const AppModel = (props: Props) => {
  const increment = () => props.increment(1);
  const decrement = () => props.decrement(1);

  return (
    <AppWrapper>
      <Header />
      <CounterComponent
        decrement={decrement}
        increment={increment}
        counter={props.counter.count}
      />
    </AppWrapper>
  );
};

const mapStateToProps = (state: StateType) => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = {
  decrement: decrementCounterAction,
  increment: incrementCounterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppModel);
