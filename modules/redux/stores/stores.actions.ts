import { createAction } from '../redux-helpers';
import { StoresActionTypes } from './stores.enum';
import { SaveStoreData, SetStoreServerOperationFailure } from './stores.types';

export const saveStoreData: SaveStoreData = createAction(StoresActionTypes.SAVE_STORE_DATA);

export const setStoreServerOperationError: SetStoreServerOperationFailure = createAction(
  StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR
);
