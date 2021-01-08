import { HYDRATE } from 'next-redux-wrapper';
import { always } from 'ramda';

import ErrorActionTypes from '../error/error.enum';
import { clearAllErrors } from '../error/error.reducer-helpers';
import { createReducer } from '../redux-helpers';
import { UserState } from '../state.types';
import { UserActionTypes, UserEnum } from './user.enum';
import {
  hydrateUserStore,
  resetUserData,
  setAccessTokenData,
  setAuthModal,
  setHasLocation,
  setUserData,
  setUserError,
  setUserLoading,
} from './user.reducer-helpers';
import { UserActions } from './user.types';

export const INITIAL_STATE = {
  [UserEnum.Loading]: false,
  [UserEnum.Data]: null,
  [UserEnum.Error]: false,
  [UserEnum.HasLocation]: false,
  [UserEnum.AuthModal]: null,
  [UserEnum.AccessToken]: null,
};

const userReducer = createReducer<UserState, UserActions>(INITIAL_STATE, [
  [HYDRATE, hydrateUserStore],
  [UserActionTypes.EMAIL_SIGN_IN_START, setUserLoading],
  [UserActionTypes.SIGN_UP_START, setUserLoading],
  [UserActionTypes.SIGN_UP_SUCCESS, setUserData],
  [UserActionTypes.GET_RESET_PASSWORD_EMAIL_START, setUserLoading],
  [UserActionTypes.GET_RESET_PASSWORD_EMAIL_SUCCESS, resetUserData],
  [UserActionTypes.SIGN_OUT_START, setUserLoading],
  [UserActionTypes.SIGN_OUT_SUCCESS, resetUserData],
  [UserActionTypes.SET_USER_OPERATION_ERROR, setUserError],
  [UserActionTypes.SIGN_IN_SUCCESS, setUserData],
  [UserActionTypes.ONBOARD_USER_START, setUserLoading],
  [UserActionTypes.LOAD_INITIAL_USER_DATA, setUserData],
  [UserActionTypes.GOOGLE_SIGN_IN_START, setUserLoading],
  [UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, setUserData],
  [UserActionTypes.UPDATE_USER_START, setUserLoading],
  [UserActionTypes.UPDATE_USER_SUCCESS, setUserData],
  [UserActionTypes.RESET_PASSWORD_START, setUserLoading],
  [UserActionTypes.SET_HAS_LOCATION, setHasLocation],
  [UserActionTypes.SET_AUTH_MODAL, setAuthModal],
  [UserActionTypes.RESET_PASSWORD_SUCCESS, always(INITIAL_STATE)],
  [UserActionTypes.SET_ACCESS_TOKEN, setAccessTokenData],
  [ErrorActionTypes.CLEAR_ERROR, clearAllErrors],
]);

export default userReducer;
