import * as API from '@api';
import Route from '@constants/routes';
import { MakeTestClientAPIResponse } from '@ilovemochi/test-suite';
import { IGenericObject } from '@ilovemochi/types';
import { mockStoreUserState, recordSaga } from '@test-utils';
import Router from 'next/router';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { getResetPasswordEmail } from '../../user.sagas';

jest.mock('@api', () => ({ PostRecoverPassword: jest.fn() }));
jest.mock('next/router', () => ({ push: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

describe(getResetPasswordEmail.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const payload = { payload: 'any_email' };
  const argument = { email: 'any_email' };

  const messageResponse = MakeTestClientAPIResponse({ message: 'Email sent!' });

  test(`should call the post recover password api if successful`, async () => {
    (API as IGenericObject<any>).PostRecoverPassword = jest.fn().mockResolvedValue(messageResponse);

    const dispatched = await recordSaga(mockStoreUserState(), getResetPasswordEmail, payload);
    expect(API.PostRecoverPassword).toHaveBeenCalledTimes(1);
    expect(API.PostRecoverPassword).toHaveBeenCalledWith(argument);
    expect(dispatched).toContainEqual(actions.getResetPasswordEmailSuccess());
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11204)));
    expect(Router.push).toHaveBeenCalledWith(Route.Home);
  });

  test(`should still call the get reset password email success action`, async () => {
    (API as IGenericObject<any>).PostRecoverPassword = jest.fn().mockRejectedValue(error);

    const dispatched = await recordSaga(mockStoreUserState(), getResetPasswordEmail, payload);
    expect(API.PostRecoverPassword).toHaveBeenCalledTimes(1);
    expect(API.PostRecoverPassword).toHaveBeenCalledWith(argument);
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
