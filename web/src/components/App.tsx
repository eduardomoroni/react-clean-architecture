import { Counter } from 'core'
import * as React from 'react';
import '../stylesheets/App.css';

import logo from '../assets/logo.svg';

class App extends React.Component {
  public render() {
    const counter = new Counter(1);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="App-intro">
          Counter is: {counter.count}
        </p>
      </div>
    );
  }
}

export default App;
