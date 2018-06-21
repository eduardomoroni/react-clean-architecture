import { Counter } from 'core'
import * as React from 'react';

import logo from '../assets/logo.svg';
import '../stylesheets/App.css';

interface IProps {
  counter: Counter,
  decrement: (qty: number) => void,
  increment: (qty: number) => void,
};

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
        Counter is: { props.counter.count }
      </h1>
    </div>
  );
};

// const mapStateToProps = (state: StateType) => ({
//   counter: counterSelector(state),
// });
//
// const mapDispatchToProps = {
//   decrement: decrementCounterAction,
//   increment: incrementCounterAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
