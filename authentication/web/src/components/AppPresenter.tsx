import * as React from "react";
import {connect} from "react-redux";
import {Credential, signInAction, signOutAction, StateType, User, userSelector} from "core";

import "../stylesheets/App.css";
import {Header} from "./Header";
import {AppWrapper} from "./AppWrapper";
import {UserComponent} from "./UserComponent";
import {SignInComponent} from "./SignInComponent";
import {SignOutButton} from "./SignOutButton";
import {SignUpComponent} from "./SignUpComponent";

interface Props {
  user: User | null,
  dispatchSignIn: (credential: Credential) => void;
  dispatchSignOut: () => void;
}

export const AppModel = (props: Props) => {
  const onSignIn = (email: string, password: string) => props.dispatchSignIn(new Credential(email, password));
  const onSignUp = (email: string, password: string) => props.dispatchSignIn(new Credential(email, password));

  return (
    <AppWrapper>
      <Header />
      <UserComponent user={props.user} />
      <SignInComponent onClick={onSignIn}/>
      <SignUpComponent onClick={onSignUp}/>
      <SignOutButton onClick={props.dispatchSignOut}/>
    </AppWrapper>
  );
};

const mapStateToProps = (state: StateType) => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  dispatchSignIn: signInAction,
  dispatchSignOut: signOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModel);
