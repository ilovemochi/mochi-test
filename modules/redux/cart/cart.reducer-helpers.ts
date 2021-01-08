import { mergeLeft, mergeRight } from 'ramda';

import { Reducer } from '../redux.types';
import { CartState } from '../state.types';
import { CartSelectorEnum } from './cart.enum';
import {
  AddCartItemSuccessReturn,
  ClearCartItemSuccessReturn,
  RemoveCartItemSuccessReturn,
} from './cart.types';

export const openCart = mergeLeft({ visible: true });

export const closeCart = mergeLeft({ visible: false });

export const addItemToCart: Reducer<CartState, any> = (
  state: CartState,
  action: AddCartItemSuccessReturn
) => {
  if (action.payload.length <= 0) return state;
  const { name: storeName, id: storeId } = action.payload[0].store;

  return mergeRight(state, {
    [CartSelectorEnum.CartItems]: action.payload,
    [CartSelectorEnum.StoreId]: storeId,
    [CartSelectorEnum.StoreName]: storeName,
  });
};

export const removeItemFromCart: Reducer<CartState, any> = (
  state: CartState,
  action: RemoveCartItemSuccessReturn
) => mergeRight(state, { [CartSelectorEnum.CartItems]: action.payload });

export const clearItemFromCart: Reducer<CartState, any> = (
  state: CartState,
  action: ClearCartItemSuccessReturn
) =>
  mergeRight(state, {
    [CartSelectorEnum.CartItems]: action.payload,
  });

export const clearCart = (state: CartState) =>
  mergeRight(state, {
    [CartSelectorEnum.CartItems]: [],
  });
