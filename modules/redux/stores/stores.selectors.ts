import memoize from 'fast-memoize';
import { pathOr } from 'ramda';

import { StoresState } from '../state.types';
import { StoresSelectorEnum } from './stores.enum';
import { INITIAL_STATE } from './stores.reducer';

export const getStore = memoize((id: string) =>
  pathOr<StoresState[StoresSelectorEnum.Data][string] | undefined>(undefined, [
    StoresSelectorEnum.Stores,
    StoresSelectorEnum.Data,
    id,
  ])
);

export const getStoreError = memoize(
  pathOr<StoresState[StoresSelectorEnum.Error]>(INITIAL_STATE[StoresSelectorEnum.Error], [
    StoresSelectorEnum.Error,
  ])
);
