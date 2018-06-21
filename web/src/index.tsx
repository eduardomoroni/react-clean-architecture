import { configureStore } from "core";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

const ConnectedApp = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(
  ConnectedApp,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
