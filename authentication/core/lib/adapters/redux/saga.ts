import { takeLatest, put, call, all } from 'redux-saga/effects';
import {Credential} from "../../entities";
import {updateUserAction} from "./user";
import {SignInInteractor} from "../../useCases";
import {SampleService} from "../../services/SampleService";

export const SIGN_IN = 'user/saga/sign_in';

interface SignInActionType {
  type: string,
  credential: Credential,
}

const signInAction = (credential: Credential): SignInActionType => ({
  type: SIGN_IN,
  credential
});

function* signInSaga(action: SignInActionType) {
  try {
    const service = new SampleService();
    const interactor = new SignInInteractor(service);
    const user = yield call(
      interactor.signIn,
      action.credential,
    );
    yield put(updateUserAction(user));
  } catch (error) {
    console.error(error);
    // DO SOMETHING ELSE WITH ERROR
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, signInSaga),
  ]);
}
