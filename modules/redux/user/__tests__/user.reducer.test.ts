import { Location, User } from '@ilovemochi/enums';
import { MakeTestUser } from '@ilovemochi/test-suite';
import { HYDRATE } from 'next-redux-wrapper';
import { assocPath, curryN, mergeRight } from 'ramda';

import { clearAllErrors } from '../../error/error.action';
import * as actions from '../user.actions';
import { AuthModalEnum, UserEnum } from '../user.enum';
import reducer, { INITIAL_STATE as state } from '../user.reducer';

const reducerWithUserState = curryN(2, reducer)(state);
const newState = mergeRight(state);

describe('User Reducer', () => {
  const data = MakeTestUser() as any;

  test('Email Sign In Start', () => {
    expect(reducerWithUserState(actions.emailSignInStart(data))).toEqual(
      newState({ [UserEnum.Loading]: true })
    );
  });

  test('Sign Up Start', () => {
    expect(reducerWithUserState(actions.signUpStart(data))).toEqual(
      newState({ [UserEnum.Loading]: true })
    );
  });

  test('Sign Up Success', () => {
    expect(reducerWithUserState(actions.signUpSuccess(data))).toEqual(
      newState({
        [UserEnum.Data]: data,
        [UserEnum.Error]: false,
        [UserEnum.Loading]: false,
        [UserEnum.HasLocation]: true,
        [UserEnum.AuthModal]: null,
      })
    );
  });

  test('Get Reset Password Email Start', () => {
    expect(reducerWithUserState(actions.getResetPasswordEmailStart(data))).toEqual(
      newState({ [UserEnum.Loading]: true })
    );
  });

  test('Sign Out Start', () => {
    expect(reducerWithUserState(actions.signOutStart())).toEqual(
      newState({ [UserEnum.Loading]: true })
    );
  });

  test('Sign Out Success', () => {
    expect(reducer({ ...state, [UserEnum.HasLocation]: true }, actions.signOutSuccess())).toEqual({
      ...state,
      [UserEnum.HasLocation]: true,
    });
  });

  test('Set User Operation Failure', () => {
    expect(reducerWithUserState(actions.setUserOperationFailure(data))).toEqual(
      newState({ [UserEnum.Error]: true, [UserEnum.Loading]: false })
    );
  });

  test('Sign In Success', () => {
    expect(reducerWithUserState(actions.signInSuccess(data))).toEqual(
      newState({
        [UserEnum.Data]: data,
        [UserEnum.Error]: false,
        [UserEnum.Loading]: false,
        [UserEnum.HasLocation]: true,
        [UserEnum.AuthModal]: null,
      })
    );
  });

  test('Get Reset Password Email Success', () => {
    expect(reducerWithUserState(actions.getResetPasswordEmailSuccess())).toEqual(state);
  });

  test('On Board User Start', () => {
    expect(reducerWithUserState(actions.onboardUserStart(data))).toEqual(
      newState({
        [UserEnum.Loading]: true,
      })
    );
  });

  test('Load Initial User Data', () => {
    expect(reducerWithUserState(actions.loadInitialUserData(data))).toEqual(
      newState({
        [UserEnum.Data]: data,
        [UserEnum.Error]: false,
        [UserEnum.Loading]: false,
        [UserEnum.HasLocation]: true,
        [UserEnum.AuthModal]: null,
      })
    );
  });

  test('Google Sign In Start', () => {
    expect(reducerWithUserState(actions.googleSignInStart(data))).toEqual(
      newState({
        [UserEnum.Loading]: true,
      })
    );
  });

  test('Google Sign In Success user with coordinates', () => {
    expect(reducerWithUserState(actions.googleSignInSuccess(data))).toEqual(
      newState({
        [UserEnum.Data]: data,
        [UserEnum.Error]: false,
        [UserEnum.Loading]: false,
        [UserEnum.AuthModal]: null,
        [UserEnum.HasLocation]: true,
      })
    );
  });

  test('Google Sign In Success user without coordinates', () => {
    const modifiedData = assocPath([User.Location, Location.Coordinates], [], data);

    expect(reducerWithUserState(actions.googleSignInSuccess(modifiedData))).toEqual(
      newState({
        [UserEnum.Data]: modifiedData,
        [UserEnum.Error]: false,
        [UserEnum.Loading]: false,
        [UserEnum.AuthModal]: null,
        [UserEnum.HasLocation]: false,
      })
    );
  });

  test('Update User Start', () => {
    expect(reducerWithUserState(actions.updateUserStart(data))).toEqual(
      newState({
        [UserEnum.Loading]: true,
      })
    );
  });

  test('Update User Success', () => {
    expect(reducerWithUserState(actions.updateUserSuccess(data))).toEqual(
      newState({
        [UserEnum.Loading]: false,
        [UserEnum.AuthModal]: null,
        [UserEnum.Data]: data,
        [UserEnum.HasLocation]: true,
      })
    );
  });

  test('Reset Password State', () => {
    expect(reducerWithUserState(actions.resetPasswordSuccess())).toEqual(state);
  });

  test('Reset Password Start', () => {
    expect(reducerWithUserState(actions.resetPasswordStart(data))).toEqual(
      newState({ [UserEnum.Loading]: true })
    );
  });

  it('Clear All Errors', () => {
    expect(reducerWithUserState(clearAllErrors())).toEqual(
      newState({
        [UserEnum.Error]: false,
      })
    );
  });

  it('HYDRATE', () => {
    const hydrateActionReturn = {
      type: HYDRATE,
      payload: {
        [UserEnum.User]: {
          [UserEnum.Data]: data,
          [UserEnum.Error]: true,
          [UserEnum.Loading]: false,
          [UserEnum.HasLocation]: true,
          [UserEnum.AuthModal]: 'something',
          [UserEnum.AccessToken]: 'access_token',
        },
      },
    };

    expect(reducerWithUserState(hydrateActionReturn)).toEqual(
      newState({
        [UserEnum.Data]: data,
        [UserEnum.Error]: true,
        [UserEnum.Loading]: false,
        [UserEnum.HasLocation]: true,
        [UserEnum.AuthModal]: 'something',
        [UserEnum.AccessToken]: 'access_token',
      })
    );
  });

  it('sets is loading on getLocationCookieStart action called', () => {
    expect(reducerWithUserState(actions.setHasLocation(true))).toEqual(
      newState({
        [UserEnum.HasLocation]: true,
      })
    );
  });

  test('sets sign modal with sign types ', () => {
    expect(reducerWithUserState(actions.setAuthModal(AuthModalEnum.SignIn))).toEqual(
      newState({
        [UserEnum.AuthModal]: AuthModalEnum.SignIn,
      })
    );
  });

  test('sets a new access token', () => {
    expect(reducerWithUserState(actions.setAccessToken('access_token'))).toEqual(
      newState({
        [UserEnum.AccessToken]: 'access_token',
      })
    );
  });
});
