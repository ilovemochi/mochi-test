import { OrderActionTypes } from '../order/order.enum';
import { createReducer } from '../redux-helpers';
import { OperationServiceState } from '../state.types';
import { StoresActionTypes } from '../stores/stores.enum';
import { UserActionTypes } from '../user/user.enum';
import { OperationServiceActionsTypes, OperationServiceStateKeys } from './operation-service.enum';
import {
  addServerError,
  addSuccessMessage,
  removeMessage,
} from './operation-service.reducer-helpers';
import { OperationServiceActions } from './operation-service.types';

export const INITIAL_STATE = {
  [OperationServiceStateKeys.Messages]: [],
};

const operationServiceReducer = createReducer<OperationServiceState, OperationServiceActions>(
  INITIAL_STATE,
  [
    [OrderActionTypes.ORDER_CREATE_FAILURE, addServerError],
    [StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR, addServerError],
    [UserActionTypes.SET_USER_OPERATION_ERROR, addServerError],
    [OperationServiceActionsTypes.ADD_SUCCESS_MESSAGE, addSuccessMessage],
    [OperationServiceActionsTypes.REMOVE_MESSAGE, removeMessage],
  ]
);

export default operationServiceReducer;
