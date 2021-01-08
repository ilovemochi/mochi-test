import { createAction, createConstantAction } from '../redux-helpers';
import { CartActionTypes } from './cart.enum';
import {
  AddCartItemStart,
  AddCartItemSuccess,
  CheckLocalStorage,
  ClearCartItemStart,
  ClearCartItemSuccess,
  ClearCartStart,
  ClearCartSuccess,
  CloseCart,
  OpenCart,
  RemoveCartItemStart,
  RemoveCartItemSuccess,
} from './cart.types';

export const openCart: OpenCart = createConstantAction(CartActionTypes.CART_OPEN);

export const closeCart: CloseCart = createConstantAction(CartActionTypes.CART_CLOSE);

export const addCartItemStart: AddCartItemStart = createAction(CartActionTypes.CART_ADD_ITEM_START);
export const addCartItemSuccess: AddCartItemSuccess = createAction(
  CartActionTypes.CART_ADD_ITEM_SUCCESS
);

export const removeCartItemStart: RemoveCartItemStart = createAction(
  CartActionTypes.CART_REMOVE_ITEM_START
);
export const removeCartItemSuccess: RemoveCartItemSuccess = createAction(
  CartActionTypes.CART_REMOVE_ITEM_SUCCESS
);

export const clearCartItemStart: ClearCartItemStart = createAction(
  CartActionTypes.CART_CLEAR_ITEM_START
);
export const clearCartItemSuccess: ClearCartItemSuccess = createAction(
  CartActionTypes.CART_CLEAR_ITEM_SUCCESS
);

export const clearCartStart: ClearCartStart = createConstantAction(
  CartActionTypes.CART_CLEAR_START
);
export const clearCartSuccess: ClearCartSuccess = createConstantAction(
  CartActionTypes.CART_CLEAR_SUCCESS
);

export const checkLocalStorageStart: CheckLocalStorage = createConstantAction(
  CartActionTypes.CART_CHECK_LOCAL_STORAGE_START
);
export const checkLocalStorageSuccess: CheckLocalStorage = createConstantAction(
  CartActionTypes.CART_CHECK_LOCAL_STORAGE_SUCCESS
);
