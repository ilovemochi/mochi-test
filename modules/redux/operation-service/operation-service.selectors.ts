import memoize from 'fast-memoize';

import { getInOperationServiceMessages } from './operation-service.selector-helpers';

// eslint-disable-next-line import/prefer-default-export
export const getOperationServiceMessages = memoize(getInOperationServiceMessages);
