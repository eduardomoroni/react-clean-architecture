import * as React from "react";
import {Provider} from "react-redux";
import AppPresenter from "./components/AppPresenter";
import {configureStore} from "core";

export default () => (
  <Provider store={configureStore()}>
    <AppPresenter />
  </Provider>
);
