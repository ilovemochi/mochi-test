import * as API from '@api';
import Route from '@constants/routes';
import { IGenericObject } from '@ilovemochi/types';
import {
  makeSagaArgument,
  MakeTestClientAPIResponse,
  MakeTestUser,
  mockStoreUserState,
  recordSaga,
} from '@test-utils';
import Router from 'next/router';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { signUp } from '../../user.sagas';

jest.mock('@api');
jest.mock('next/router', () => ({ push: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

const mockUser = MakeTestUser();
const mockUserResponse = MakeTestClientAPIResponse({ data: mockUser, accessToken: 'accessToken' });

describe(signUp.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`should call sign up API and sign up success action if no error is thrown`, async () => {
    (API as IGenericObject<any>).SignUp = jest.fn().mockResolvedValue(mockUserResponse);
    const argument = makeSagaArgument({
      password: 'any_password',
      passwordConfirmation: 'any_password',
      name: 'any_name',
      email: 'any_email',
    });

    const state = mockStoreUserState();

    const dispatched = await recordSaga(state, signUp, argument);
    expect(API.SignUp).toHaveBeenCalledTimes(1);
    expect(API.SignUp).toHaveBeenCalledWith({
      password: 'any_password',
      passwordConfirmation: 'any_password',
      name: 'any_name',
      email: 'any_email',
    });
    expect(dispatched).toContainEqual(
      actions.setAccessToken(mockUserResponse.data.accessToken || '')
    );
    expect(dispatched).toContainEqual(actions.signUpSuccess(mockUser));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
  });

  test(`should call sign up API and sign up success action and route to another path if no error is thrown`, async () => {
    (API as IGenericObject<any>).SignUp = jest.fn().mockResolvedValue(mockUserResponse);
    const path = Route.MochiNight;
    const argument = makeSagaArgument({
      password: 'any_password',
      passwordConfirmation: 'any_password',
      name: 'any_name',
      email: 'any_email',
      path,
    });

    const state = mockStoreUserState();

    const dispatched = await recordSaga(state, signUp, argument);
    expect(API.SignUp).toHaveBeenCalledTimes(1);
    expect(API.SignUp).toHaveBeenCalledWith({
      password: 'any_password',
      passwordConfirmation: 'any_password',
      name: 'any_name',
      email: 'any_email',
    });
    expect(dispatched).toContainEqual(actions.signUpSuccess(mockUser));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(path);
  });

  test(`should call set user operational failure if an error is thrown`, async () => {
    (API as IGenericObject<any>).SignUp = jest.fn().mockRejectedValue(error);
    const argument = makeSagaArgument({
      password: 'any_password',
      passwordConfirmation: 'invalid_password',
      name: 'any_name',
      email: 'any_email',
    });

    const state = mockStoreUserState();
    const dispatched = await recordSaga(state, signUp, argument);
    expect(API.SignUp).toHaveBeenCalledTimes(1);
    expect(API.SignUp).toHaveBeenCalledWith({
      password: 'any_password',
      passwordConfirmation: 'invalid_password',
      name: 'any_name',
      email: 'any_email',
    });
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
