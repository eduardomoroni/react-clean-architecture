import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Credential} from "../../entities";
import {updateUserAction} from "./user";
import {SignInInteractor} from "../../useCases";
import {SampleService} from "../../services";

export const SIGN_IN = 'user/saga/sign_in';

interface SignInActionType {
  type: string,
  credential: Credential,
}

export const signInAction = (credential: Credential): SignInActionType => ({
  type: SIGN_IN,
  credential
});

function* signInSaga(action: SignInActionType) {
  try {
    const service = new SampleService();
    const interactor = new SignInInteractor(service);

    const user = yield interactor.signIn(action.credential);
    yield put(updateUserAction(user));
  } catch (error) {
    console.error(error);
    // DO SOMETHING ELSE
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, signInSaga),
  ]);
}
