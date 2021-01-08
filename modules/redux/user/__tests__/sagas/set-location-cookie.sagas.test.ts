import * as API from '@api';
import { IGenericObject } from '@ilovemochi/types';
import { mockStoreUserState, recordSaga } from '@test-utils';

import * as actions from '../../user.actions';
import { setLocationCookie } from '../../user.sagas';

jest.mock('@api', () => ({ GetLocationCookie: jest.fn() }));

const error = {
  code: 10000,
  value: null,
};

describe(setLocationCookie.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const argument = {
    payload: {
      lat: 232342432,
      lng: 23423424,
    },
  };

  test('requests location cookie and call setHasLocation action', async () => {
    (API as IGenericObject<any>).GetLocationCookie = jest.fn().mockResolvedValue({});

    const dispatched = await recordSaga(mockStoreUserState(), setLocationCookie, argument);
    expect(API.GetLocationCookie).toHaveBeenCalledTimes(1);
    expect(API.GetLocationCookie).toHaveBeenCalledWith(argument.payload);
    expect(dispatched).toContainEqual(actions.setHasLocation(true));
  });

  test('calls setUserOperationFailure action if an error thrown while requesting location cookie', async () => {
    (API as IGenericObject<any>).GetLocationCookie = jest.fn().mockRejectedValue(error);

    const dispatched = await recordSaga(mockStoreUserState(), setLocationCookie, argument);
    expect(API.GetLocationCookie).toHaveBeenCalledTimes(1);
    expect(API.GetLocationCookie).toHaveBeenCalledWith(argument.payload);
    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
