import { Store } from '@ilovemochi/enums';
import { MakeTestStore } from '@ilovemochi/test-suite';
import { HYDRATE } from 'next-redux-wrapper';
import { curryN, mergeRight } from 'ramda';

import { clearAllErrors } from '../../error/error.action';
import * as actions from '../stores.actions';
import { StoresSelectorEnum } from '../stores.enum';
import reducer, { INITIAL_STATE as state } from '../stores.reducer';

const error = {
  code: 10000,
  value: null,
};

const reducerWithStoresState = curryN(2, reducer)(state);
const newState = mergeRight(state);

describe('Stores Reducer', () => {
  const store = MakeTestStore();

  test('Save Store Data', () => {
    const reducerNewState = reducerWithStoresState(actions.saveStoreData(store));
    expect(reducerNewState).toEqual(
      newState({
        [StoresSelectorEnum.Data]: { [store[Store.Id]]: store },
      })
    );
  });

  test('HYDRATE', () => {
    const hydrateActionReturn = {
      type: HYDRATE,
      payload: {
        [StoresSelectorEnum.Stores]: {
          [StoresSelectorEnum.Data]: { [store[Store.Id]]: store },
          [StoresSelectorEnum.Error]: true,
        },
      },
    };
    const reducerNewState = reducerWithStoresState(hydrateActionReturn);
    expect(reducerNewState).toEqual(
      newState({
        [StoresSelectorEnum.Data]: { [store[Store.Id]]: store },
        [StoresSelectorEnum.Error]: true,
      })
    );
  });

  test('Clear All Errors', () => {
    const reducerNewState = reducer(
      newState({ [StoresSelectorEnum.Error]: true }),
      clearAllErrors() as any
    );

    expect(reducerNewState).toEqual(
      newState({
        [StoresSelectorEnum.Error]: false,
      })
    );
  });

  test('Set Store Server Operation Error', () => {
    const reducerNewState = reducerWithStoresState(actions.setStoreServerOperationError(error));
    expect(reducerNewState).toEqual(
      newState({
        [StoresSelectorEnum.Error]: true,
      })
    );
  });
});
