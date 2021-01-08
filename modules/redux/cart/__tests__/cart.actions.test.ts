import { MakeTestCartItem } from '@ilovemochi/test-suite';

import * as actions from '../cart.actions';
import { CartActionTypes } from '../cart.enum';

describe('Cart Actions', () => {
  const id = 'id';

  test('Open Cart', () => {
    const result = actions.openCart();
    expect(result).toEqual({ type: CartActionTypes.CART_OPEN });
  });

  test('Close Cart', () => {
    const result = actions.closeCart();
    expect(result).toEqual({ type: CartActionTypes.CART_CLOSE });
  });

  test('Add Cart Item', () => {
    const cartItem = MakeTestCartItem();
    const result = actions.addCartItemStart(cartItem);
    expect(result).toEqual({ type: CartActionTypes.CART_ADD_ITEM_START, payload: cartItem });
  });

  test('Add Cart Item Success', () => {
    const cartItem = MakeTestCartItem();
    const result = actions.addCartItemSuccess([cartItem]);
    expect(result).toEqual({ type: CartActionTypes.CART_ADD_ITEM_SUCCESS, payload: [cartItem] });
  });

  test('Remove Cart Item', () => {
    const result = actions.removeCartItemStart(id);
    expect(result).toEqual({
      type: CartActionTypes.CART_REMOVE_ITEM_START,
      payload: id,
    });
  });

  test('Remove Cart Item Success', () => {
    const result = actions.removeCartItemSuccess([]);
    expect(result).toEqual({
      type: CartActionTypes.CART_REMOVE_ITEM_SUCCESS,
      payload: [],
    });
  });

  test('Clear Cart Item', () => {
    const result = actions.clearCartItemStart(id);
    expect(result).toEqual({
      type: CartActionTypes.CART_CLEAR_ITEM_START,
      payload: id,
    });
  });

  test('Clear Cart Item Success', () => {
    const result = actions.clearCartItemSuccess([]);
    expect(result).toEqual({
      type: CartActionTypes.CART_CLEAR_ITEM_SUCCESS,
      payload: [],
    });
  });

  test('Clear Cart', () => {
    const result = actions.clearCartStart();
    expect(result).toEqual({
      type: CartActionTypes.CART_CLEAR_START,
    });
  });

  test('Clear Cart Success', () => {
    const result = actions.clearCartSuccess();
    expect(result).toEqual({
      type: CartActionTypes.CART_CLEAR_SUCCESS,
    });
  });

  test('Check Local Storage', () => {
    const result = actions.checkLocalStorageStart();
    expect(result).toEqual({
      type: CartActionTypes.CART_CHECK_LOCAL_STORAGE_START,
    });
  });

  test('Check Local Storage Success', () => {
    const result = actions.checkLocalStorageSuccess();
    expect(result).toEqual({
      type: CartActionTypes.CART_CHECK_LOCAL_STORAGE_SUCCESS,
    });
  });
});
