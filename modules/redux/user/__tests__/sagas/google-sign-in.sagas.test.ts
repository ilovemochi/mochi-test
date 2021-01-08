import * as API from '@api';
import Route from '@constants/routes';
import { IGenericObject, IUser } from '@ilovemochi/types';
import {
  makeSagaArgument,
  MakeTestClientAPIResponse,
  MakeTestGoogleUser,
  MakeTestUser,
  mockStoreUserState,
  recordSaga,
} from '@test-utils';
import Router from 'next/router';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { AuthModalEnum } from '../../user.enum';
import { googleSignIn } from '../../user.sagas';

jest.mock('@api', () => ({ GoogleSignIn: jest.fn() }));
jest.mock('next/router', () => ({ push: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

describe(googleSignIn.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const googleUser = MakeTestGoogleUser();
  const argument = makeSagaArgument({
    ...googleUser,
  });

  test(`should call google sign in and is a new user`, async () => {
    const googleUserAsUser = ({
      name: 'any_name',
      location: { coordinates: [] },
    } as unknown) as IUser;

    const googleUserAsUserResponse = MakeTestClientAPIResponse({
      data: googleUserAsUser,
      accessToken: 'access_token',
    });

    (API as IGenericObject<any>).GoogleSignIn = jest
      .fn()
      .mockResolvedValue(googleUserAsUserResponse);

    const state = mockStoreUserState();

    const dispatched = await recordSaga(state, googleSignIn, argument);
    expect(API.GoogleSignIn).toHaveBeenCalledTimes(1);
    expect(API.GoogleSignIn).toHaveBeenCalledWith({
      idToken: googleUser.idToken,
    });
    expect(dispatched).toContainEqual(
      actions.setAccessToken(googleUserAsUserResponse.data.accessToken || '')
    );
    expect(dispatched).toContainEqual(actions.googleSignInSuccess(googleUserAsUser));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
    expect(dispatched).toContainEqual(actions.setAuthModal(AuthModalEnum.Onboarding));
  });

  test(`should call google sign in and route to home if its an existing user`, async () => {
    const user = MakeTestUser();
    const userResponse = MakeTestClientAPIResponse({ data: user, accessToken: 'accessToken' });
    (API as IGenericObject<any>).GoogleSignIn = jest.fn().mockResolvedValue(userResponse);
    const state = mockStoreUserState();

    const dispatched = await recordSaga(state, googleSignIn, argument);
    expect(API.GoogleSignIn).toHaveBeenCalledTimes(1);
    expect(API.GoogleSignIn).toHaveBeenCalledWith({
      idToken: googleUser.idToken,
    });
    expect(dispatched).toContainEqual(actions.googleSignInSuccess(user));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(Route.Home);
  });

  test(`should call google sign in and route to another path if its an existing user`, async () => {
    const user = MakeTestUser();
    const userResponse = MakeTestClientAPIResponse({ data: user, accessToken: 'access_token' });
    (API as IGenericObject<any>).GoogleSignIn = jest.fn().mockResolvedValue(userResponse);
    const state = mockStoreUserState();

    const path = Route.MochiNight;
    const argumentTwo = makeSagaArgument({
      ...googleUser,
      path,
    });

    const dispatched = await recordSaga(state, googleSignIn, argumentTwo);
    expect(API.GoogleSignIn).toHaveBeenCalledTimes(1);
    expect(API.GoogleSignIn).toHaveBeenCalledWith({
      idToken: googleUser.idToken,
    });
    expect(dispatched).toContainEqual(actions.googleSignInSuccess(user));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(path);
  });

  test(`should call set user operation failure action if an error is thrown`, async () => {
    (API as IGenericObject<any>).GoogleSignIn = jest.fn().mockRejectedValue(error);

    const state = mockStoreUserState();
    const dispatched = await recordSaga(state, googleSignIn, argument);
    expect(API.GoogleSignIn).toHaveBeenCalledTimes(1);
    expect(API.GoogleSignIn).toHaveBeenCalledWith({
      idToken: googleUser.idToken,
    });
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
