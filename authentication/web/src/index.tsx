import { configureStore } from "core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/AppPresenter";
import "./stylesheets/index.css";

const element: HTMLElement | null = document.getElementById("root");
const ConnectedApp = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(ConnectedApp, element);
