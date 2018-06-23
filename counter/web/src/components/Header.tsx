import * as React from "react";

import logo from "../assets/logo.svg";
import "../stylesheets/App.css";

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
};
