import * as actions from '../error.action';
import ErrorActionTypes from '../error.enum';

describe('error actions', () => {
  test(actions.clearAllErrors.name, () => {
    const result = actions.clearAllErrors();
    expect(result).toEqual({ type: ErrorActionTypes.CLEAR_ERROR });
  });
});
