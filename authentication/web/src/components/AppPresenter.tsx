import * as React from "react";
import "../stylesheets/App.css";
import {connect} from "react-redux";
import {Header} from "./Header";
import {AppWrapper} from "./AppWrapper";
import {UserComponent} from "./UserComponent";
import {Credential, signInAction, StateType, User, userSelector} from "core";
import {SignInButton} from "./SignInButton";

interface Props {
  user?: User,
  dispatchSignIn: (credential: Credential) => void;
}

export const AppModel = (props: Props) => {
  const onLogin = () => props.dispatchSignIn(new Credential('email@email.com', '123abc'));

  return (
    <AppWrapper>
      <Header />
      <UserComponent user={props.user} />
      <SignInButton onClicked={onLogin}/>
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
