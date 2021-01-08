import { hasDuplicates } from '@utils/helper-functions';

import { StoresActionTypes } from '../stores.enum';

const actionsArray = Object.values(StoresActionTypes);

describe('Store Action Types', () => {
  test(StoresActionTypes.SAVE_STORE_DATA, () => {
    expect(StoresActionTypes.SAVE_STORE_DATA).toBe('SAVE_STORE_DATA');
  });

  test(StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR, () => {
    expect(StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR).toBe(
      'SET_STORE_SERVER_OPERATION_ERROR'
    );
  });

  test('length of the test action types array', () => {
    expect(actionsArray.length).toBe(2);
    expect(hasDuplicates(actionsArray)).toBe(false);
  });
});
