import { hasDuplicates } from '@utils/helper-functions';

import { CartActionTypes } from '../cart.enum';

const actionsArray = Object.values(CartActionTypes);

describe('Cart Action Types', () => {
  test(CartActionTypes.CART_OPEN, () => {
    expect(CartActionTypes.CART_OPEN).toBe('CART_OPEN');
  });

  test(CartActionTypes.CART_CLOSE, () => {
    expect(CartActionTypes.CART_CLOSE).toBe('CART_CLOSE');
  });

  test(CartActionTypes.CART_ADD_ITEM_START, () => {
    expect(CartActionTypes.CART_ADD_ITEM_START).toBe('CART_ADD_ITEM_START');
  });

  test(CartActionTypes.CART_ADD_ITEM_SUCCESS, () => {
    expect(CartActionTypes.CART_ADD_ITEM_SUCCESS).toBe('CART_ADD_ITEM_SUCCESS');
  });

  test(CartActionTypes.CART_CHECK_LOCAL_STORAGE_START, () => {
    expect(CartActionTypes.CART_CHECK_LOCAL_STORAGE_START).toBe('CART_CHECK_LOCAL_STORAGE_START');
  });

  test(CartActionTypes.CART_CHECK_LOCAL_STORAGE_SUCCESS, () => {
    expect(CartActionTypes.CART_CHECK_LOCAL_STORAGE_SUCCESS).toBe(
      'CART_CHECK_LOCAL_STORAGE_SUCCESS'
    );
  });

  test(CartActionTypes.CART_CLEAR_ITEM_START, () => {
    expect(CartActionTypes.CART_CLEAR_ITEM_START).toBe('CART_CLEAR_ITEM_START');
  });

  test(CartActionTypes.CART_CLEAR_ITEM_SUCCESS, () => {
    expect(CartActionTypes.CART_CLEAR_ITEM_SUCCESS).toBe('CART_CLEAR_ITEM_SUCCESS');
  });

  test(CartActionTypes.CART_CLEAR_START, () => {
    expect(CartActionTypes.CART_CLEAR_START).toBe('CART_CLEAR_START');
  });

  test(CartActionTypes.CART_CLEAR_SUCCESS, () => {
    expect(CartActionTypes.CART_CLEAR_SUCCESS).toBe('CART_CLEAR_SUCCESS');
  });

  test(CartActionTypes.CART_REMOVE_ITEM_START, () => {
    expect(CartActionTypes.CART_REMOVE_ITEM_START).toBe('CART_REMOVE_ITEM_START');
  });

  test(CartActionTypes.CART_REMOVE_ITEM_SUCCESS, () => {
    expect(CartActionTypes.CART_REMOVE_ITEM_SUCCESS).toBe('CART_REMOVE_ITEM_SUCCESS');
  });

  test('length of the cart action types array', () => {
    expect(actionsArray.length).toBe(12);
    expect(hasDuplicates(actionsArray)).toBe(false);
  });
});
