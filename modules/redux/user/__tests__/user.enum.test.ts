import { IGenericObject } from '@ilovemochi/types';
import { hasDuplicates } from '@utils/helper-functions';

import { UserActionTypes } from '../user.enum';

const actionsArray = Object.values<string>(UserActionTypes as IGenericObject<string>);

describe('User Action Types', () => {
  test(UserActionTypes.EMAIL_SIGN_IN_START, () => {
    expect(UserActionTypes.EMAIL_SIGN_IN_START).toBe('EMAIL_SIGN_IN_START');
  });

  test(UserActionTypes.GET_RESET_PASSWORD_EMAIL_START, () => {
    expect(UserActionTypes.GET_RESET_PASSWORD_EMAIL_START).toBe('GET_RESET_PASSWORD_EMAIL_START');
  });

  test(UserActionTypes.GET_RESET_PASSWORD_EMAIL_SUCCESS, () => {
    expect(UserActionTypes.GET_RESET_PASSWORD_EMAIL_SUCCESS).toBe(
      'GET_RESET_PASSWORD_EMAIL_SUCCESS'
    );
  });

  test(UserActionTypes.GOOGLE_SIGN_IN_START, () => {
    expect(UserActionTypes.GOOGLE_SIGN_IN_START).toBe('GOOGLE_SIGN_IN_START');
  });

  test(UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, () => {
    expect(UserActionTypes.GOOGLE_SIGN_IN_SUCCESS).toBe('GOOGLE_SIGN_IN_SUCCESS');
  });

  test(UserActionTypes.LOAD_INITIAL_USER_DATA, () => {
    expect(UserActionTypes.LOAD_INITIAL_USER_DATA).toBe('LOAD_INITIAL_USER_DATA');
  });

  test(UserActionTypes.ONBOARD_USER_START, () => {
    expect(UserActionTypes.ONBOARD_USER_START).toBe('ONBOARD_USER_START');
  });

  test(UserActionTypes.RESET_PASSWORD_START, () => {
    expect(UserActionTypes.RESET_PASSWORD_START).toBe('RESET_PASSWORD_START');
  });

  test(UserActionTypes.RESET_PASSWORD_SUCCESS, () => {
    expect(UserActionTypes.RESET_PASSWORD_SUCCESS).toBe('RESET_PASSWORD_SUCCESS');
  });

  test(UserActionTypes.SET_USER_OPERATION_ERROR, () => {
    expect(UserActionTypes.SET_USER_OPERATION_ERROR).toBe('SET_USER_OPERATION_ERROR');
  });

  test(UserActionTypes.SIGN_IN_SUCCESS, () => {
    expect(UserActionTypes.SIGN_IN_SUCCESS).toBe('SIGN_IN_SUCCESS');
  });

  test(UserActionTypes.SIGN_OUT_START, () => {
    expect(UserActionTypes.SIGN_OUT_START).toBe('SIGN_OUT_START');
  });

  test(UserActionTypes.SIGN_OUT_SUCCESS, () => {
    expect(UserActionTypes.SIGN_OUT_SUCCESS).toBe('SIGN_OUT_SUCCESS');
  });

  test(UserActionTypes.SIGN_UP_START, () => {
    expect(UserActionTypes.SIGN_UP_START).toBe('SIGN_UP_START');
  });

  test(UserActionTypes.SIGN_UP_SUCCESS, () => {
    expect(UserActionTypes.SIGN_UP_SUCCESS).toBe('SIGN_UP_SUCCESS');
  });

  test(UserActionTypes.UPDATE_USER_START, () => {
    expect(UserActionTypes.UPDATE_USER_START).toBe('UPDATE_USER_START');
  });

  test(UserActionTypes.UPDATE_USER_SUCCESS, () => {
    expect(UserActionTypes.UPDATE_USER_SUCCESS).toBe('UPDATE_USER_SUCCESS');
  });

  test(UserActionTypes.SET_HAS_LOCATION, () => {
    expect(UserActionTypes.SET_HAS_LOCATION).toBe('SET_HAS_LOCATION');
  });

  test(UserActionTypes.SET_LOCATION_COOKIE_START, () => {
    expect(UserActionTypes.SET_LOCATION_COOKIE_START).toBe('SET_LOCATION_COOKIE_START');
  });

  test(UserActionTypes.SET_AUTH_MODAL, () => {
    expect(UserActionTypes.SET_AUTH_MODAL).toBe('SET_AUTH_MODAL');
  });

  test(UserActionTypes.SET_ACCESS_TOKEN, () => {
    expect(UserActionTypes.SET_ACCESS_TOKEN).toBe('SET_ACCESS_TOKEN');
  });

  test('length of the test action types array', () => {
    expect(actionsArray.length).toBe(21);
    expect(hasDuplicates(actionsArray)).toBe(false);
  });
});
