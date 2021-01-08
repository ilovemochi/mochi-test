import {
  MakeTestGoogleUser,
  MakeTestIncompleteUser,
  MakeTestSignUpUser,
  MakeTestUser,
  MakeTestUserAdditionalInformation,
} from '@test-utils';

import * as actions from '../user.actions';
import { UserActionTypes } from '../user.enum';

const user = MakeTestUser();

describe('User Actions', () => {
  test('Email Sign In Start', () => {
    const payload = {
      email: 'developer.tony17@gmail.com',
      password: 'tony1234',
    } as any;
    const expectedReturn = {
      type: UserActionTypes.EMAIL_SIGN_IN_START,
      payload,
    };
    expect(actions.emailSignInStart(payload)).toEqual(expectedReturn);
  });

  test('Sign In Success', () => {
    const expectedReturn = {
      type: UserActionTypes.SIGN_IN_SUCCESS,
      payload: user,
    };

    expect(actions.signInSuccess(user)).toEqual(expectedReturn);
  });

  test('Sign Up Start', () => {
    const signUpUser = MakeTestSignUpUser() as any;
    const expectedReturn = {
      type: UserActionTypes.SIGN_UP_START,
      payload: signUpUser,
    };

    expect(actions.signUpStart(signUpUser)).toEqual(expectedReturn);
  });

  test('Sign Up Success', () => {
    const expectedReturn = {
      type: UserActionTypes.SIGN_UP_SUCCESS,
      payload: user,
    };

    expect(actions.signUpSuccess(user)).toEqual(expectedReturn);
  });

  test('Sign Out Start', () => {
    expect(actions.signOutStart()).toEqual({
      type: UserActionTypes.SIGN_OUT_START,
    });
  });

  test('Sign Out Success', () => {
    expect(actions.signOutSuccess()).toEqual({
      type: UserActionTypes.SIGN_OUT_SUCCESS,
    });
  });

  test('Reset Password Start', () => {
    const payload = { password: '1234', token: 'token' } as any;
    const expectedReturn = {
      type: UserActionTypes.RESET_PASSWORD_START,
      payload,
    };

    expect(actions.resetPasswordStart(payload)).toEqual(expectedReturn);
  });

  test('Reset Password Success', () => {
    expect(actions.resetPasswordSuccess()).toEqual({
      type: UserActionTypes.RESET_PASSWORD_SUCCESS,
    });
  });

  test('On Board User Start', () => {
    const payload = MakeTestUserAdditionalInformation();
    const expectedReturn = {
      type: UserActionTypes.ONBOARD_USER_START,
      payload,
    };

    expect(actions.onboardUserStart(payload as any)).toEqual(expectedReturn);
  });

  test('Load Initial User Data', () => {
    expect(actions.loadInitialUserData(user)).toEqual({
      type: UserActionTypes.LOAD_INITIAL_USER_DATA,
      payload: user,
    });
  });

  test('Update User Start', () => {
    expect(actions.updateUserStart(user)).toEqual({
      type: UserActionTypes.UPDATE_USER_START,
      payload: user,
    });
  });

  test('Update User Success', () => {
    expect(actions.updateUserSuccess(user)).toEqual({
      type: UserActionTypes.UPDATE_USER_SUCCESS,
      payload: user,
    });
  });

  test('Google Sign In Start', () => {
    const googleUser = MakeTestGoogleUser() as any;
    expect(actions.googleSignInStart(googleUser)).toEqual({
      type: UserActionTypes.GOOGLE_SIGN_IN_START,
      payload: googleUser,
    });
  });

  test('Google Sign In Success', () => {
    const incompleteUser = MakeTestIncompleteUser() as any;
    expect(actions.googleSignInSuccess(incompleteUser)).toEqual({
      type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
      payload: incompleteUser,
    });
  });

  test('Set User Operation Failure', () => {
    const error = {
      code: 10000,
      value: null,
    };
    expect(actions.setUserOperationFailure(error)).toEqual({
      type: UserActionTypes.SET_USER_OPERATION_ERROR,
      payload: error,
    });
  });

  test('Get Reset Password Email Start', () => {
    const email = 'jose@ilovemochi.com';
    expect(actions.getResetPasswordEmailStart(email)).toEqual({
      type: UserActionTypes.GET_RESET_PASSWORD_EMAIL_START,
      payload: email,
    });
  });

  test('Get Reset Password Email Success', () => {
    expect(actions.getResetPasswordEmailSuccess()).toEqual({
      type: UserActionTypes.GET_RESET_PASSWORD_EMAIL_SUCCESS,
    });
  });

  test('Set Has Location', () => {
    expect(actions.setHasLocation(false)).toEqual({
      type: UserActionTypes.SET_HAS_LOCATION,
      payload: false,
    });
  });

  test('should return setAuthModal action', () => {
    expect(actions.setAuthModal(null)).toEqual({
      type: UserActionTypes.SET_AUTH_MODAL,
    });
  });

  test('should return the set access action return', () => {
    expect(actions.setAccessToken('access_token')).toEqual({
      type: UserActionTypes.SET_ACCESS_TOKEN,
      payload: 'access_token',
    });
  });
});
