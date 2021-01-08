import { hasDuplicates } from '@utils/helper-functions';

import ErrorActionTypes from '../error.enum';

const actionsArray = Object.values(ErrorActionTypes);

describe('Error Action Types', () => {
  test(ErrorActionTypes.CLEAR_ERROR, () => {
    expect(ErrorActionTypes.CLEAR_ERROR).toBe('CLEAR_ERROR');
  });

  test('length of the test action types array', () => {
    expect(actionsArray.length).toBe(1);
    expect(hasDuplicates(actionsArray)).toBe(false);
  });
});
