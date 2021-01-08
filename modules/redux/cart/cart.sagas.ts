import {
  getItemFromLocalStorage,
  LocalStorageKeys,
  removeItemFromLocalStorage,
} from '@utils/local-storage';
import { compose, not } from 'ramda';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import {
  addCartItemSuccess,
  clearCartItemSuccess,
  clearCartSuccess,
  removeCartItemSuccess,
} from './cart.actions';
import { CartActionTypes, CartSelectorEnum } from './cart.enum';
import {
  getCartState,
  mapWith,
  storeCartDataToLocalStorage,
  updateCartItemsQuantity,
} from './cart.sagas-helper';
import { AddCartItemReturn, ClearCartItemReturn, RemoveCartItemReturn } from './cart.types';

export function* refreshCartItemsFromLocalStorage() {
  const state = yield select(getCartState);

  const data = yield call(getItemFromLocalStorage, LocalStorageKeys.Cart);

  if (!data || !data.length) {
    const cartItems = state[CartSelectorEnum.CartItems];
    yield put(addCartItemSuccess(cartItems));
    return;
  }

  yield put(addCartItemSuccess(data));
}

export function* addCartItem(action: AddCartItemReturn) {
  const state = yield select(getCartState);

  const { id: storeId } = action.payload.store;
  const stateStoreId = state[CartSelectorEnum.StoreId];

  if (stateStoreId !== storeId) {
    yield call(storeCartDataToLocalStorage, [action.payload]);
    yield put(addCartItemSuccess([action.payload]));
    return;
  }

  const { id } = action.payload;

  const cartItems = state[CartSelectorEnum.CartItems];
  const existingCartItem = cartItems.find(mapWith('id', id));

  if (existingCartItem) {
    const updatedCartItems = updateCartItemsQuantity(cartItems, id, true);
    yield call(storeCartDataToLocalStorage, updatedCartItems);
    yield put(addCartItemSuccess(updatedCartItems));
    return;
  }

  const updatedCartItems = cartItems.concat(action.payload);
  yield call(storeCartDataToLocalStorage, updatedCartItems);
  yield put(addCartItemSuccess(updatedCartItems));
}

export function* removeItemFromCart(action: RemoveCartItemReturn) {
  const state = yield select(getCartState);
  const cartItems = state[CartSelectorEnum.CartItems];

  const existingCartItem = cartItems.find(mapWith('id', action.payload));

  if (!existingCartItem) {
    yield call(storeCartDataToLocalStorage, cartItems);
    yield put(removeCartItemSuccess(cartItems));
    return;
  }

  if (existingCartItem.quantity === 1) {
    const updatedCartItems = cartItems.filter(compose(not, mapWith('id', action.payload)));
    yield call(storeCartDataToLocalStorage, updatedCartItems);
    yield put(removeCartItemSuccess(updatedCartItems));
    return;
  }

  const updatedCartItems = updateCartItemsQuantity(cartItems, action.payload, false);

  yield call(storeCartDataToLocalStorage, updatedCartItems);
  yield put(removeCartItemSuccess(updatedCartItems));
}

export function* clearItemFromCart(action: ClearCartItemReturn) {
  const state = yield select(getCartState);
  const cartItems = state[CartSelectorEnum.CartItems];

  const updatedCartItems = cartItems.filter(compose(not, mapWith('id', action.payload)));

  yield call(storeCartDataToLocalStorage, updatedCartItems);
  yield put(clearCartItemSuccess(updatedCartItems));
}

export function* clearCart() {
  yield call(removeItemFromLocalStorage, LocalStorageKeys.Cart);
  yield put(clearCartSuccess());
}

function* watchAddCartItem() {
  yield takeLatest(CartActionTypes.CART_ADD_ITEM_START, addCartItem);
}

function* watchRemoveCartItem() {
  yield takeLatest(CartActionTypes.CART_REMOVE_ITEM_START, removeItemFromCart);
}

function* watchClearItemFromCart() {
  yield takeLatest(CartActionTypes.CART_CLEAR_ITEM_START, clearItemFromCart);
}

function* watchClearCart() {
  yield takeLatest(CartActionTypes.CART_CLEAR_START, clearCart);
}

function* watchCheckLocalStorageCart() {
  yield takeLatest(
    CartActionTypes.CART_CHECK_LOCAL_STORAGE_START,
    refreshCartItemsFromLocalStorage
  );
}

function* cartSagas() {
  yield all([
    call(watchAddCartItem),
    call(watchRemoveCartItem),
    call(watchClearItemFromCart),
    call(watchClearCart),
    call(watchCheckLocalStorageCart),
  ]);
}

export default cartSagas;
