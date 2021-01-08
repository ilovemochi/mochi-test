import { pathOr } from 'ramda';

import { OperationServiceMessage } from '../state.types';
import { OperationServiceStateKeys } from './operation-service.enum';
import { INITIAL_STATE } from './operation-service.reducer';

// eslint-disable-next-line import/prefer-default-export
export const getInOperationServiceMessages = pathOr<ReadonlyArray<OperationServiceMessage>>(
  INITIAL_STATE[OperationServiceStateKeys.Messages],
  [OperationServiceStateKeys.OperationService, OperationServiceStateKeys.Messages]
);
