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
import { signInWithEmail } from '../../user.sagas';

jest.mock('@api', () => ({ Login: jest.fn() }));
jest.mock('next/router', () => ({ push: jest.fn() }));

describe(signInWithEmail.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const data = MakeTestUser();
  const dataResponse = MakeTestClientAPIResponse({ data, accessToken: 'accessToken' });

  const error = {
    code: 10000,
    value: null,
  };

  test(`should call ${API.Login.name} and sign up success action if no error is thrown`, async () => {
    (API as IGenericObject<any>).Login = jest.fn().mockResolvedValue(dataResponse);
    const argument = makeSagaArgument({
      password: 'any_password',
      email: 'any_email',
    });

    const state = mockStoreUserState();

    const dispatched = await recordSaga(state, signInWithEmail, argument);
    expect(API.Login).toHaveBeenCalledTimes(1);
    expect(API.Login).toHaveBeenCalledWith({
      password: 'any_password',
      email: 'any_email',
    });
    expect(dispatched).toContainEqual(actions.setAccessToken(dataResponse.data.accessToken));
    expect(dispatched).toContainEqual(actions.signInSuccess(data));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
  });

  test(`should call ${API.Login.name} and sign up success action if no error is thrown and route to a path`, async () => {
    (API as IGenericObject<any>).Login = jest.fn().mockResolvedValue(dataResponse);

    const state = mockStoreUserState();

    const path = Route.MochiNight;
    const argument = makeSagaArgument({
      password: 'any_password',
      email: 'any_email',
      path,
    });

    const dispatched = await recordSaga(state, signInWithEmail, argument);
    expect(API.Login).toHaveBeenCalledTimes(1);
    expect(API.Login).toHaveBeenCalledWith({
      password: 'any_password',
      email: 'any_email',
    });
    expect(dispatched).toContainEqual(actions.signInSuccess(data));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11200)));
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(path);
  });

  test(`should call ${API.Login.name} and set user operation failure action if an error is thrown`, async () => {
    (API as IGenericObject<any>).Login = jest.fn().mockRejectedValue(error);
    const argument = makeSagaArgument({
      password: 'any_password',
      email: 'any_email',
    });

    const state = mockStoreUserState();

    const dispatched = await recordSaga(state, signInWithEmail, argument);
    expect(API.Login).toHaveBeenCalledTimes(1);
    expect(API.Login).toHaveBeenCalledWith({
      password: 'any_password',
      email: 'any_email',
    });
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
