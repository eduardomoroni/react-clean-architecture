import * as React from "react";
import "../stylesheets/App.css";

interface PropsType {
  onClicked: () => void,
}

export const SignInButton = (props: PropsType) => {
  return (
    <h2 onClick={props.onClicked}>
      Click to login
    </h2>
  );
};
