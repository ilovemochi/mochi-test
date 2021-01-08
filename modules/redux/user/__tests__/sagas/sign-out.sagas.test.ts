import * as API from '@api';
import { IGenericObject } from '@ilovemochi/types';
import { mockStoreUserState, recordSaga } from '@test-utils';
import { put } from 'redux-saga/effects';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { signOut } from '../../user.sagas';

jest.mock('@api', () => ({ SignOut: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

describe(signOut.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`should call ${API.SignOut.name} and sign out success action if there are no errors`, async () => {
    (API as IGenericObject<any>).SignOut = jest.fn().mockResolvedValue(true);
    const state = mockStoreUserState();
    const dispatched = await recordSaga(state, signOut);

    expect(API.SignOut).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(actions.signOutSuccess());
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11201)));
  });

  test(`should call set user operation failure if an error is thrown`, async () => {
    const generator = signOut();
    generator.next();
    const { value } = generator.throw(error);
    expect(value).toStrictEqual(put(actions.setUserOperationFailure(error)));
  });
});
