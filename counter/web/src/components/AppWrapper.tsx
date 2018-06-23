import * as React from "react";
import { ReactNode } from "react";
import "../stylesheets/App.css";

interface Props {
  children: ReactNode;
}

export const AppWrapper = (props: Props) => {
  return <div className="App">{props.children}</div>;
};
