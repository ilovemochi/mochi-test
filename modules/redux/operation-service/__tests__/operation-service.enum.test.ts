import { hasDuplicates } from '@utils/helper-functions';

import { OperationServiceActionsTypes } from '../operation-service.enum';

const actionsArray = Object.values(OperationServiceActionsTypes);

describe('Operation Service Action Types', () => {
  test(OperationServiceActionsTypes.ADD_SUCCESS_MESSAGE, () => {
    expect(OperationServiceActionsTypes.ADD_SUCCESS_MESSAGE).toBe('ADD_SUCCESS_MESSAGE');
  });

  test(OperationServiceActionsTypes.REMOVE_MESSAGE, () => {
    expect(OperationServiceActionsTypes.REMOVE_MESSAGE).toBe('REMOVE_MESSAGE');
  });

  test('length of the test action types array', () => {
    expect(actionsArray.length).toBe(2);
    expect(hasDuplicates(actionsArray)).toBe(false);
  });
});
