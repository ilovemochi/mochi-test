import { ICartItem } from '@ilovemochi/types';
import DineroFactory from 'dinero.js';

import { SignOutSuccessReturn } from '../user/user.types';
import { CartActionTypes } from './cart.enum';

// ***** Interfaces for the actions Start *****

export interface OpenCartReturn {
  type: CartActionTypes.CART_OPEN;
}

export interface OpenCart {
  (): OpenCartReturn;
}

interface CloseCartReturn {
  type: CartActionTypes.CART_CLOSE;
}

export interface CloseCart {
  (): CloseCartReturn;
}

export interface AddCartItemReturn {
  type: CartActionTypes.CART_ADD_ITEM_START;
  payload: ICartItem<DineroFactory.DineroObject>;
}

export interface AddCartItemSuccessReturn {
  type: CartActionTypes.CART_ADD_ITEM_SUCCESS;
  payload: Array<ICartItem<DineroFactory.DineroObject>>;
}

export interface AddCartItemStart {
  (item: ICartItem<DineroFactory.DineroObject>): AddCartItemReturn;
}

export interface AddCartItemSuccess {
  (items: Array<ICartItem<DineroFactory.DineroObject>>): AddCartItemSuccessReturn;
}

export interface RemoveCartItemReturn {
  type: CartActionTypes.CART_REMOVE_ITEM_START;
  payload: string;
}

export interface RemoveCartItemSuccessReturn {
  type: CartActionTypes.CART_REMOVE_ITEM_SUCCESS;
  payload: Array<ICartItem<DineroFactory.DineroObject>>;
}

export interface RemoveCartItemStart {
  (itemId: string): RemoveCartItemReturn;
}

export interface RemoveCartItemSuccess {
  (item: Array<ICartItem<DineroFactory.DineroObject>>): RemoveCartItemSuccessReturn;
}

export interface ClearCartItemReturn {
  type: CartActionTypes.CART_CLEAR_ITEM_START;
  payload: string;
}

export interface ClearCartItemSuccessReturn {
  type: CartActionTypes.CART_CLEAR_ITEM_SUCCESS;
  payload: Array<ICartItem<DineroFactory.DineroObject>>;
}

export interface ClearCartItemStart {
  (itemId: string): ClearCartItemReturn;
}

export interface ClearCartItemSuccess {
  (item: Array<ICartItem<DineroFactory.DineroObject>>): ClearCartItemSuccessReturn;
}

interface ClearCartReturn {
  type: CartActionTypes.CART_CLEAR_START;
}

interface ClearCartSuccessReturn {
  type: CartActionTypes.CART_CLEAR_SUCCESS;
}

export interface ClearCartStart {
  (): ClearCartReturn;
}

export interface ClearCartSuccess {
  (): ClearCartSuccessReturn;
}

interface CheckLocalStorageReturn {
  type: CartActionTypes.CART_CHECK_LOCAL_STORAGE_START;
}

export interface CheckLocalStorage {
  (): CheckLocalStorageReturn;
}
// ***** Interfaces for the actions End *****

export type CartActions =
  | OpenCartReturn
  | CloseCartReturn
  | AddCartItemSuccessReturn
  | RemoveCartItemSuccessReturn
  | ClearCartSuccessReturn
  | CheckLocalStorageReturn
  | SignOutSuccessReturn
  | ClearCartItemSuccessReturn;
