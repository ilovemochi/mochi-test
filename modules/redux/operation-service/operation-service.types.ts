import { I18nError } from '@ilovemochi/types';

import { CreateOrderFailureReturn } from '../order/order.types';
import { SetStoreServerOperationFailureReturn } from '../stores/stores.types';
import { SetUserOperationFailureReturn } from '../user/user.types';
import { OperationServiceActionsTypes } from './operation-service.enum';

export interface AddSuccessMessageReturn {
  type: typeof OperationServiceActionsTypes.ADD_SUCCESS_MESSAGE;
  payload: I18nError;
}

export interface AddSuccessMessage {
  (payload: I18nError): AddSuccessMessageReturn;
}

export interface RemoveMessageReturn {
  type: typeof OperationServiceActionsTypes.REMOVE_MESSAGE;
  payload: string;
}

export interface RemoveMessage {
  (id: string): RemoveMessageReturn;
}

// ***** Interfaces for the actions End *****

export type OperationServiceActions =
  | RemoveMessageReturn
  | AddSuccessMessageReturn
  | SetUserOperationFailureReturn
  | SetStoreServerOperationFailureReturn
  | CreateOrderFailureReturn;
