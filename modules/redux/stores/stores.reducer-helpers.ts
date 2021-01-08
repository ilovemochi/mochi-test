import { applySpec, identity, mergeDeepRight, mergeLeft, mergeRight, pathOr, useWith } from 'ramda';
import { AnyAction } from 'redux';

import { HydrateReducer, Reducer } from '../redux.types';
import { StoresState } from '../state.types';
import { StoresSelectorEnum } from './stores.enum';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const addStoreData: Reducer<StoresState, AnyAction> = useWith(mergeRight, [
  identity,
  x => ({ [StoresSelectorEnum.Data]: { [x.payload.id]: x.payload } }),
]);

export const setStoreError: Reducer<StoresState, AnyAction> = mergeLeft({
  [StoresSelectorEnum.Error]: true,
});

const getStoreData = pathOr<StoresState[StoresSelectorEnum.Data]>({}, [
  'payload',
  StoresSelectorEnum.Stores,
  StoresSelectorEnum.Data,
]);

const getStoreError = pathOr<StoresState[StoresSelectorEnum.Error]>(false, [
  'payload',
  StoresSelectorEnum.Stores,
  StoresSelectorEnum.Error,
]);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const hydrateStoreData: HydrateReducer<any, AnyAction, StoresState> = useWith(
  mergeDeepRight,
  [
    identity,
    applySpec({
      [StoresSelectorEnum.Data]: getStoreData,
      [StoresSelectorEnum.Error]: getStoreError,
    }),
  ]
);
