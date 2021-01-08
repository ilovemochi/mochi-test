import * as actions from '../operation-service.actions';
import { OperationServiceActionsTypes } from '../operation-service.enum';

describe('Operation Service Actions', () => {
  test('Add Success Message', () => {
    const payload = {
      code: 10000,
      value: null,
    };
    expect(actions.addSuccessMessage(payload)).toEqual({
      type: OperationServiceActionsTypes.ADD_SUCCESS_MESSAGE,
      payload: {
        code: 10000,
        value: null,
      },
    });
  });

  test('Remove Message', () => {
    const payload = 'any_id';
    expect(actions.removeMessage(payload)).toEqual({
      type: OperationServiceActionsTypes.REMOVE_MESSAGE,
      payload: 'any_id',
    });
  });
});
