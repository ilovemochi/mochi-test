import * as API from '@api';
import Route from '@constants/routes';
import { IGenericObject } from '@ilovemochi/types';
import {
  makeSagaArgument,
  MakeTestClientAPIResponse,
  MakeTestUser,
  MakeTestUserAdditionalInformation,
  mockStoreUserState,
  recordSaga,
} from '@test-utils';
import Router from 'next/router';
import { omit } from 'ramda';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { UserEnum } from '../../user.enum';
import { onboardUser } from '../../user.sagas';

jest.mock('@api', () => ({ PostUpdateUser: jest.fn(), SignOut: jest.fn() }));
jest.mock('next/router', () => ({ push: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

const mockUser = MakeTestUser();
const mockUserResponse = MakeTestClientAPIResponse(mockUser);

describe(onboardUser.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const data = MakeTestUserAdditionalInformation();

  test(`should call ${API.PostUpdateUser.name} and sign in success action if no error is thrown`, async () => {
    (API as IGenericObject<any>).PostUpdateUser = jest.fn().mockResolvedValue(mockUserResponse);
    const id = { id: 'valid_id' };
    const state = mockStoreUserState({
      [UserEnum.Data]: { id },
      [UserEnum.AccessToken]: 'access_token_3',
    });
    const dispatched = await recordSaga(state, onboardUser, makeSagaArgument(data));

    expect(dispatched).toContainEqual(
      actions.setAccessToken(mockUserResponse.authData?.accessToken || '')
    );
    expect(API.PostUpdateUser).toHaveBeenCalledTimes(1);
    expect(API.PostUpdateUser).toHaveBeenCalledWith({ id, ...data }, 'access_token_3');
    expect(dispatched).toContainEqual(actions.signInSuccess(mockUser));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11202)));
  });

  test(`should call ${API.PostUpdateUser.name} and sign in success action if no error is thrown and Route to another path`, async () => {
    (API as IGenericObject<any>).PostUpdateUser = jest
      .fn()
      .mockResolvedValue(omit(['authData'], mockUserResponse));
    const id = { id: 'valid_id' };
    const state = mockStoreUserState({
      [UserEnum.Data]: { id },
      [UserEnum.AccessToken]: 'access_token_3',
    });
    const path = Route.Home;
    const argument = makeSagaArgument({
      ...data,
      path,
    });
    const dispatched = await recordSaga(state, onboardUser, argument);
    expect(dispatched).not.toContainEqual(
      actions.setAccessToken(mockUserResponse.authData?.accessToken || '')
    );
    expect(API.PostUpdateUser).toHaveBeenCalledTimes(1);
    expect(API.PostUpdateUser).toHaveBeenCalledWith({ id, ...data }, 'access_token_3');
    expect(dispatched).toContainEqual(actions.signInSuccess(mockUser));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11202)));
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(path);
  });

  test(`should call set user operation failure action if an error is thrown`, async () => {
    (API as IGenericObject<any>).PostUpdateUser = jest.fn().mockRejectedValue(error);

    const id = 'invalid_id';
    const state = mockStoreUserState({
      [UserEnum.Data]: { id },
      [UserEnum.AccessToken]: 'access_token_3',
    });
    const dispatched = await recordSaga(state, onboardUser, makeSagaArgument(data));

    expect(API.PostUpdateUser).toHaveBeenCalledTimes(1);
    expect(API.PostUpdateUser).toHaveBeenCalledWith({ id, ...data }, 'access_token_3');
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
    expect(API.SignOut).toHaveBeenCalledTimes(1);
  });
});
