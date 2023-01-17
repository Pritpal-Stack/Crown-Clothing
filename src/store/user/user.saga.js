import { call, all, takeLatest, put } from "redux-saga/effects";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  AuthSignInUsingEmailPassword,
  AuthUsingEmailPassword,
  SignOutUser,
} from "../../utils/firebase/firebase.utils";
import { USER_ACTION_TYPE } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signUpSuccess,
  signOutFailed,
  signOutSuccess,
} from "./user.actions";

export function* getSnapshotFromUserAuth(useAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, useAuth, additionalDetails);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* SignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(AuthUsingEmailPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* SignOut() {
  console.log("SignOut=================");
  try {
    yield call(SignOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* SignInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* SignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(AuthSignInUsingEmailPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* SignInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* OnGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, SignInWithGoogle);
}

export function* OnEmailSignInStart() {
  console.log("OnEmailSignInStart");
  yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, SignInWithEmail);
}

export function* OnSignUpStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, SignUp);
}

export function* OnSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, SignInAfterSignUp);
}

export function* OnSignOutStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, SignOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(OnGoogleSignInStart),
    call(OnEmailSignInStart),
    call(OnSignUpStart),
    call(OnSignUpSuccess),
    call(OnSignOutStart),
  ]);
}
