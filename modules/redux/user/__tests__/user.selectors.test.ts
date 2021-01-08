import { MakeTestUser } from '@ilovemochi/test-suite';
import { mockStoreUserState } from '@test-utils';

import { AuthModalEnum, UserEnum } from '../user.enum';
import * as selectors from '../user.selectors';

describe('User Selectors', () => {
  test('Get User Data', () => {
    const user = MakeTestUser();
    const state = mockStoreUserState({
      [UserEnum.Data]: user,
    });
    expect(selectors.getUserData(state as any)).toEqual(user);
  });

  test('Get User Error', () => {
    const error = new Error();
    const state = mockStoreUserState({
      [UserEnum.Error]: error,
    });
    expect(selectors.getUserError(state as any)).toEqual(error);
  });

  test('Get User Loading', () => {
    const loading = true;
    const state = mockStoreUserState({
      [UserEnum.Loading]: loading,
    });
    expect(selectors.getUserLoading(state as any)).toBe(true);
  });

  test('Get User HasLocation', () => {
    const hasLocation = true;
    const state = mockStoreUserState({
      [UserEnum.HasLocation]: hasLocation,
    });
    expect(selectors.getUserHasLocation(state as any)).toBe(true);
  });

  test('should return SignType or null from redux-mochi-night', () => {
    const authModal = AuthModalEnum.SignUp;
    const state = mockStoreUserState({
      [UserEnum.AuthModal]: authModal,
    });
    expect(selectors.getAuthModal(state as any)).toBe(authModal);
  });

  test('should return the access token', () => {
    const state = mockStoreUserState({
      [UserEnum.AccessToken]: 'access_token',
    });
    expect(selectors.getAccessToken(state as any)).toBe('access_token');
  });

  test('should return the access token and user data', () => {
    const state = mockStoreUserState({
      [UserEnum.AccessToken]: 'access_token',
      [UserEnum.Data]: 'user',
    });
    expect(selectors.getUserDataAccessToken(state as any)).toEqual({
      user: 'user',
      accessToken: 'access_token',
    });
  });
});
