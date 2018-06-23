import * as React from "react";
import {connect} from "react-redux";
import {Credential, signInAction, StateType, User, userSelector} from "core";

import "../stylesheets/App.css";
import {Header} from "./Header";
import {AppWrapper} from "./AppWrapper";
import {UserComponent} from "./UserComponent";
import {SignComponent} from "./SignComponent";

interface Props {
  user: User | null,
  dispatchSignIn: (credential: Credential) => void;
}

export const AppModel = (props: Props) => {
  const onLogin = (email: string, password: string) => props.dispatchSignIn(new Credential(email, password));

  return (
    <AppWrapper>
      <Header />
      <UserComponent user={props.user} />
      <SignComponent onClick={onLogin}/>
    </AppWrapper>
  );
};

const mapStateToProps = (state: StateType) => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  dispatchSignIn: signInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModel);
