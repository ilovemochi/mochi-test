import {
  TGoogleSignIn,
  TLogin,
  TPostRecoverPassword,
  TSignOut,
  TSignUp,
} from '@api/auth/auth-protocols';
import * as API from '@api/index';
import { TPostUpdateUser } from '@api/user/user-protocols';
import Route from '@constants/routes';
import { User } from '@ilovemochi/enums';
import { userHasCoordinates } from '@utils/helper-functions';
import Router from 'next/router';
import { pathOr } from 'ramda';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { addSuccessMessage } from '../operation-service/operation-service.actions';
import { createOperation } from '../redux-helpers';
import {
  getResetPasswordEmailSuccess,
  googleSignInSuccess,
  resetPasswordSuccess,
  setAccessToken,
  setAuthModal,
  setHasLocation,
  setUserOperationFailure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  updateUserSuccess,
} from './user.actions';
import { AuthModalEnum, UserActionTypes } from './user.enum';
import { getUserDataAccessToken } from './user.selectors';
import {
  EmailSignInStartReturn,
  GetResetPasswordEmailStartReturn,
  GoogleSignInStartReturn,
  OnboardUserStartStartReturn,
  ResetPasswordStartReturn,
  SetLocationCookieStartReturn,
  SignUpStartReturn,
  UpdateUserStartReturn,
} from './user.types';

export function* signOut() {
  try {
    yield call<TSignOut>(API.SignOut);
    yield put(signOutSuccess());
    yield put(addSuccessMessage(createOperation(11201)));
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* onboardUser(data: OnboardUserStartStartReturn) {
  try {
    const { user: reduxUser, accessToken } = yield select(getUserDataAccessToken);
    const { path, ...payload } = data.payload;
    const { data: user, authData } = yield call<TPostUpdateUser>(
      API.PostUpdateUser,
      Object.assign(reduxUser || {}, payload),
      accessToken
    );

    if (authData) {
      yield put(setAccessToken(authData.accessToken));
    }

    yield put(signInSuccess(user));
    yield put(addSuccessMessage(createOperation(11202)));
    yield put(setAuthModal(null));
    if (path) yield call(Router.push, path);
  } catch (error) {
    yield put(setUserOperationFailure(error));
    yield call(signOut);
  }
}

export function* updateUser(data: UpdateUserStartReturn) {
  try {
    const { user: reduxUser, accessToken } = yield select(getUserDataAccessToken);
    const { data: user, authData } = yield call<TPostUpdateUser>(
      API.PostUpdateUser,
      Object.assign(reduxUser || {}, data.payload),
      accessToken
    );

    if (authData) {
      yield put(setAccessToken(authData.accessToken));
    }

    yield put(updateUserSuccess(user));
    yield put(addSuccessMessage(createOperation(11203)));
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* googleSignIn({ payload }: GoogleSignInStartReturn) {
  try {
    const { data } = yield call<TGoogleSignIn>(API.GoogleSignIn, {
      idToken: payload.idToken,
    });

    const { data: user, accessToken } = data;

    yield put(googleSignInSuccess(user));
    yield put(setAccessToken(accessToken));
    yield put(addSuccessMessage(createOperation(11200)));
    if (userHasCoordinates(user)) {
      const { path } = payload;
      if (path) yield call(Router.push, path);
      else yield call(Router.push, Route.Home);
    } else yield put(setAuthModal(AuthModalEnum.Onboarding));
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* signInWithEmail(data: EmailSignInStartReturn) {
  const getEmail = pathOr('', ['payload', User.Email]);
  const getPassword = pathOr('', ['payload', User.Password]);

  try {
    const { data: response } = yield call<TLogin>(API.Login, {
      email: getEmail(data),
      password: getPassword(data),
    });

    const { data: user, accessToken } = response;

    yield put(signInSuccess(user));
    yield put(setAccessToken(accessToken));
    yield put(addSuccessMessage(createOperation(11200)));
    const { path } = data.payload;
    if (path) yield call(Router.push, path);
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* signUp(data: SignUpStartReturn) {
  try {
    const { path, ...userPayload } = data.payload;
    const { data: response } = yield call<TSignUp>(API.SignUp, userPayload);
    const { data: user, accessToken } = response;
    yield put(signUpSuccess(user));
    yield put(setAccessToken(accessToken));
    yield put(addSuccessMessage(createOperation(11200)));
    if (path) yield call(Router.push, path);
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* getResetPasswordEmail(data: GetResetPasswordEmailStartReturn) {
  try {
    const email = data.payload;
    yield call<TPostRecoverPassword>(API.PostRecoverPassword, { email });
    yield put(getResetPasswordEmailSuccess());
    yield put(addSuccessMessage(createOperation(11204)));
    yield call(Router.push, Route.Home);
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* resetPassword(data: ResetPasswordStartReturn) {
  try {
    yield call(API.PostResetPassword, data.payload);
    yield put(resetPasswordSuccess());
    yield put(addSuccessMessage(createOperation(11205)));
    yield call(Router.push, Route.SignIn);
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

export function* setLocationCookie(data: SetLocationCookieStartReturn) {
  try {
    yield call(API.GetLocationCookie, data.payload);
    yield put(setHasLocation(true));
    yield call(Router.push, Route.MochiNight);
  } catch (error) {
    yield put(setUserOperationFailure(error));
  }
}

function* watchEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* watchSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* watchGetResetPasswordEmailStart() {
  yield takeLatest(UserActionTypes.GET_RESET_PASSWORD_EMAIL_START, getResetPasswordEmail);
}

function* watchSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* watchGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* watchOnboardUserStart() {
  yield takeLatest(UserActionTypes.ONBOARD_USER_START, onboardUser);
}

function* watchUpdateUserInfoStart() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUser);
}

function* watchResetPasswordStart() {
  yield takeLatest(UserActionTypes.RESET_PASSWORD_START, resetPassword);
}

function* watchSetLocationCookieStart() {
  yield takeLatest(UserActionTypes.SET_LOCATION_COOKIE_START, setLocationCookie);
}

function* userSagas() {
  yield all([
    call(watchGoogleSignInStart),
    call(watchEmailSignInStart),
    call(watchSignUpStart),
    call(watchGetResetPasswordEmailStart),
    call(watchSignOutStart),
    call(watchOnboardUserStart),
    call(watchUpdateUserInfoStart),
    call(watchResetPasswordStart),
    call(watchSetLocationCookieStart),
  ]);
}

export default userSagas;
