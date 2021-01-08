import { createReducer } from '../redux-helpers';
import { CartState } from '../state.types';
import { CartActionTypes, CartSelectorEnum } from './cart.enum';
import {
  addItemToCart,
  clearCart,
  clearItemFromCart,
  closeCart,
  openCart,
  removeItemFromCart,
} from './cart.reducer-helpers';
import { CartActions } from './cart.types';

export const INITIAL_STATE = {
  [CartSelectorEnum.Visible]: false,
  [CartSelectorEnum.CartItems]: [],
  [CartSelectorEnum.StoreName]: null,
  [CartSelectorEnum.StoreId]: null,
};

const cartReducer = createReducer<CartState, CartActions>(INITIAL_STATE, [
  [CartActionTypes.CART_OPEN, openCart],
  [CartActionTypes.CART_CLOSE, closeCart],
  [CartActionTypes.CART_ADD_ITEM_SUCCESS, addItemToCart],
  [CartActionTypes.CART_REMOVE_ITEM_SUCCESS, removeItemFromCart],
  [CartActionTypes.CART_CLEAR_ITEM_SUCCESS, clearItemFromCart],
  [CartActionTypes.CART_CLEAR_SUCCESS, clearCart],
]);

export default cartReducer;
