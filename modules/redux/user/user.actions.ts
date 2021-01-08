import { createAction, createConstantAction } from '../redux-helpers';
import { UserActionTypes } from './user.enum';
import {
  EmailSignInStart,
  GetResetPasswordEmailStart,
  GetResetPasswordEmailSuccess,
  GoogleSignInStart,
  GoogleSignInSuccess,
  LoadInitialUserData,
  OnboardUserStart,
  ResetPasswordStart,
  ResetPasswordSuccess,
  SetAccessToken,
  SetAuthModal,
  SetHasLocation,
  SetLocationCookieStart,
  SetUserOperationFailure,
  SignInSuccess,
  SignOutStart,
  SignOutSuccess,
  SignUpStart,
  SignUpSuccess,
  UpdateUserStart,
  UpdateUserSuccess,
} from './user.types';

export const emailSignInStart: EmailSignInStart = createAction(UserActionTypes.EMAIL_SIGN_IN_START);

export const signInSuccess: SignInSuccess = createAction(UserActionTypes.SIGN_IN_SUCCESS);

export const signUpStart: SignUpStart = createAction(UserActionTypes.SIGN_UP_START);

export const signUpSuccess: SignUpSuccess = createAction(UserActionTypes.SIGN_UP_SUCCESS);

export const signOutStart: SignOutStart = createConstantAction(UserActionTypes.SIGN_OUT_START);

export const signOutSuccess: SignOutSuccess = createConstantAction(
  UserActionTypes.SIGN_OUT_SUCCESS
);

export const getResetPasswordEmailStart: GetResetPasswordEmailStart = createAction(
  UserActionTypes.GET_RESET_PASSWORD_EMAIL_START
);

export const getResetPasswordEmailSuccess: GetResetPasswordEmailSuccess = createConstantAction(
  UserActionTypes.GET_RESET_PASSWORD_EMAIL_SUCCESS
);

export const resetPasswordStart: ResetPasswordStart = createAction(
  UserActionTypes.RESET_PASSWORD_START
);

export const resetPasswordSuccess: ResetPasswordSuccess = createConstantAction(
  UserActionTypes.RESET_PASSWORD_SUCCESS
);

export const onboardUserStart: OnboardUserStart = createAction(UserActionTypes.ONBOARD_USER_START);

export const updateUserStart: UpdateUserStart = createAction(UserActionTypes.UPDATE_USER_START);

export const updateUserSuccess: UpdateUserSuccess = createAction(
  UserActionTypes.UPDATE_USER_SUCCESS
);

export const loadInitialUserData: LoadInitialUserData = createAction(
  UserActionTypes.LOAD_INITIAL_USER_DATA
);

export const googleSignInStart: GoogleSignInStart = createAction(
  UserActionTypes.GOOGLE_SIGN_IN_START
);

export const googleSignInSuccess: GoogleSignInSuccess = createAction(
  UserActionTypes.GOOGLE_SIGN_IN_SUCCESS
);

export const setUserOperationFailure: SetUserOperationFailure = createAction(
  UserActionTypes.SET_USER_OPERATION_ERROR
);

export const setHasLocation: SetHasLocation = createAction(UserActionTypes.SET_HAS_LOCATION);

export const setLocationCookieStart: SetLocationCookieStart = createAction(
  UserActionTypes.SET_LOCATION_COOKIE_START
);

export const setAuthModal: SetAuthModal = createAction(UserActionTypes.SET_AUTH_MODAL);

export const setAccessToken: SetAccessToken = createAction(UserActionTypes.SET_ACCESS_TOKEN);
