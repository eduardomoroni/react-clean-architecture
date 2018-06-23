import * as React from "react";

import "../stylesheets/App.css";

interface PropsType {
  onClick: () => void;
}

export const SignOutButton = (props: PropsType) => (
  <button type="button" onClick={props.onClick}>
    SIGN OUT
  </button>
);
