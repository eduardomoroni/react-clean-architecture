import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
  StateType,
} from 'core'
import * as React from 'react';

import logo from '../assets/logo.svg';
import '../stylesheets/App.css';
import {connect} from "react-redux";

interface IProps {
  counter: number,
  decrement: (qty: number) => void,
  increment: (qty: number) => void,
}

export const App = (props: IProps) => {
  const increment = () => props.increment(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <h1 onClick={increment}>
        Counter is: { props.counter }
      </h1>
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  counter: counterSelector(state).count,
});

const mapDispatchToProps = {
  decrement: decrementCounterAction,
  increment: incrementCounterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
