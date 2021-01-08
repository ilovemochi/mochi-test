import { mockOperationServiceState } from '@test-utils';

import { OperationServiceStateKeys } from '../operation-service.enum';
import * as selectors from '../operation-service.selectors';

const makeOperationServiceMessage = () => ({ id: 'any_id', message: 'any_message', isError: true });

describe('Operation Service Selector', () => {
  test('Get Operation Service Messages', () => {
    const state = mockOperationServiceState({
      [OperationServiceStateKeys.Messages]: [makeOperationServiceMessage()],
    });
    expect(selectors.getOperationServiceMessages(state as any)).toEqual([
      makeOperationServiceMessage(),
    ]);
  });
});
