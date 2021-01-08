import { HYDRATE } from 'next-redux-wrapper';

import ErrorActionTypes from '../error/error.enum';
import { clearAllErrors } from '../error/error.reducer-helpers';
import { createReducer } from '../redux-helpers';
import { StoresState } from '../state.types';
import { StoresActionTypes, StoresSelectorEnum } from './stores.enum';
import { addStoreData, hydrateStoreData, setStoreError } from './stores.reducer-helpers';
import { StoresActions } from './stores.types';

export const INITIAL_STATE = {
  [StoresSelectorEnum.Data]: {},
  [StoresSelectorEnum.Error]: false,
};

const storesReducer = createReducer<StoresState, StoresActions>(INITIAL_STATE, [
  [HYDRATE, hydrateStoreData],
  [StoresActionTypes.SAVE_STORE_DATA, addStoreData],
  [StoresActionTypes.SET_STORE_SERVER_OPERATION_ERROR, setStoreError],
  [ErrorActionTypes.CLEAR_ERROR, clearAllErrors],
]);

export default storesReducer;
