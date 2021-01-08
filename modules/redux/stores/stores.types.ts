import { I18nError, IStore } from '@ilovemochi/types';

import { ClearAllErrorsReturn } from '../error/error.types';
import { HydrateAction } from '../redux.types';
import { StoresActionTypes } from './stores.enum';

// ***** Interfaces for the actions Start *****

export interface SaveStoreDataReturn {
  type: StoresActionTypes.SAVE_STORE_DATA;
  payload: IStore;
}

export interface SaveStoreData {
  (store: IStore): SaveStoreDataReturn;
}

export interface SetStoreServerOperationFailureReturn {
  type: StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR;
  payload: I18nError;
}

export interface SetStoreServerOperationFailure {
  (error: I18nError): SetStoreServerOperationFailureReturn;
}

export type StoresActions =
  | SaveStoreDataReturn
  | ClearAllErrorsReturn
  | SetStoreServerOperationFailureReturn
  | HydrateAction;

// ***** Interfaces for the actions End *****
