import { ICartItem } from '@ilovemochi/types';
import memoize from 'fast-memoize';
import { compose } from 'ramda';

import { State } from '../state.types';
import {
  addCartItemsQuantity,
  calculateTotalCartCost,
  getInCartVisible,
  getStore,
  getStoreId,
  getStoreName,
  lengthGuard,
  takeCartItemsDinero,
  takeCartItemsDineroObject,
} from './cart.selectors-helpers';

export const getCartShowState = memoize(getInCartVisible);

export const getCartTotalItems = memoize(
  compose<State, ReadonlyArray<ICartItem>, ReadonlyArray<ICartItem>, number>(
    addCartItemsQuantity,
    lengthGuard,
    takeCartItemsDinero
  )
);

export const getCartItemsDinero = memoize(takeCartItemsDinero);

export const getCartItemsDineroObject = memoize(takeCartItemsDineroObject);

export const getTotalCartCost = memoize(calculateTotalCartCost);

export const getCartStoreName = memoize(getStoreName);

export const getCartStoreId = memoize(getStoreId);

export const getCartStore = memoize(getStore);
