import { MakeTestStore } from '@ilovemochi/test-suite';

import * as actions from '../stores.actions';
import { StoresActionTypes } from '../stores.enum';

const error = {
  code: 10000,
  value: null,
};

describe('Store Actions', () => {
  test('Save Store Data', () => {
    const payload = MakeTestStore();
    const response = actions.saveStoreData(payload);
    expect(response).toEqual({
      type: StoresActionTypes.SAVE_STORE_DATA,
      payload,
    });
  });

  test('Set Store Server Operation Error', () => {
    const response = actions.setStoreServerOperationError(error);
    expect(response).toEqual({
      type: StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR,
      payload: error,
    });
  });
});
