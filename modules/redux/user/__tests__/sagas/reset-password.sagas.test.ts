import * as API from '@api';
import Route from '@constants/routes';
import { IGenericObject } from '@ilovemochi/types';
import {
  makeSagaArgument,
  MakeTestClientAPIResponse,
  mockStoreUserState,
  recordSaga,
} from '@test-utils';
import Router from 'next/router';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { resetPassword } from '../../user.sagas';

jest.mock('@api', () => ({ PostResetPassword: jest.fn() }));
jest.mock('next/router', () => ({ push: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

describe(resetPassword.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const messageResponse = MakeTestClientAPIResponse({ message: 'Password updated!' });

  test(`should call post reset password api and reset password success action if no error is thrown`, async () => {
    (API as IGenericObject<any>).PostResetPassword = jest.fn().mockResolvedValue(messageResponse);
    const argument = makeSagaArgument({ token: 'any_token', password: 'any_password' });
    const dispatched = await recordSaga(mockStoreUserState(), resetPassword, argument);
    expect(API.PostResetPassword).toHaveBeenCalledTimes(1);
    expect(API.PostResetPassword).toHaveBeenCalledWith({
      token: 'any_token',
      password: 'any_password',
    });
    expect(dispatched).toContainEqual(actions.resetPasswordSuccess());
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11205)));
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(Route.SignIn);
  });

  test(`should call reset password success action even when an error is thrown`, async () => {
    (API as IGenericObject<any>).PostResetPassword = jest.fn().mockRejectedValue(error);
    const argument = makeSagaArgument({ token: 'any_token', password: 'any_password' });
    const dispatched = await recordSaga(mockStoreUserState(), resetPassword, argument);
    expect(API.PostResetPassword).toHaveBeenCalledTimes(1);
    expect(API.PostResetPassword).toHaveBeenCalledWith({
      token: 'any_token',
      password: 'any_password',
    });
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
