import { createAction } from '../redux-helpers';
import { OperationServiceActionsTypes } from './operation-service.enum';
import { AddSuccessMessage, RemoveMessage } from './operation-service.types';

export const addSuccessMessage: AddSuccessMessage = createAction(
  OperationServiceActionsTypes.ADD_SUCCESS_MESSAGE
);

export const removeMessage: RemoveMessage = createAction(
  OperationServiceActionsTypes.REMOVE_MESSAGE
);
