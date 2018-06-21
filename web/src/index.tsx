import { configureStore, Counter } from "core";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

const uselessFunc = () => ({});

const ConnectedApp = (
  <Provider store={configureStore()}>
    <App  counter={new Counter(0)} decrement={uselessFunc} increment={uselessFunc}/>
  </Provider>
);

ReactDOM.render(
  ConnectedApp,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
