import { MakeTestCartItem, MakeTestStore } from '@ilovemochi/test-suite';
import { mockStoreCartState } from '@test-utils';
import { mapDineroToObject } from '@utils/helper-functions';
import DineroFactory from 'dinero.js';

import { StoresSelectorEnum } from '../../stores/stores.enum';
import { CartSelectorEnum } from '../cart.enum';
import * as selectors from '../cart.selectors';

describe('Cart Selectors', () => {
  test('Get Cart Store Id', () => {
    const id = 'id';
    const state = mockStoreCartState({ [CartSelectorEnum.StoreId]: id });
    expect(selectors.getCartStoreId(state as any)).toBe(id);
  });

  test('Get Cart Store Name', () => {
    const name = 'name';
    const state = mockStoreCartState({ [CartSelectorEnum.StoreName]: name });
    expect(selectors.getCartStoreName(state as any)).toBe(name);
  });

  test('Get Cart Show State', () => {
    const show = true;
    const state = mockStoreCartState({ [CartSelectorEnum.Visible]: show });
    expect(selectors.getCartShowState(state as any)).toBe(show);
  });

  test('Get Cart Total Items', () => {
    const cartItem = { ...MakeTestCartItem(), quantity: 2 };
    const cartItemTwo = { ...MakeTestCartItem(), id: 'test', quantity: 4 };
    const cartItems = [cartItem, cartItemTwo];
    const state = mockStoreCartState({ [CartSelectorEnum.CartItems]: cartItems });
    expect(selectors.getCartTotalItems(state as any)).toBe(6);
  });

  test('Get Cart Items Dinero Object', () => {
    const cartItem = { ...MakeTestCartItem(), quantity: 2 };
    const cartItemTwo = { ...MakeTestCartItem(), id: 'test', quantity: 4 };
    const cartItems = [cartItem, cartItemTwo];
    const state = mockStoreCartState({ [CartSelectorEnum.CartItems]: cartItems });
    expect(selectors.getCartItemsDineroObject(state as any)).toEqual(cartItems);
  });

  test('Get Cart Items Dinero', () => {
    const cartItem = { ...MakeTestCartItem(), quantity: 2 };
    const cartItemTwo = { ...MakeTestCartItem(), id: 'test', quantity: 4 };
    const cartItems = [cartItem, cartItemTwo];
    const state = mockStoreCartState({ [CartSelectorEnum.CartItems]: cartItems });
    expect(mapDineroToObject(selectors.getCartItemsDinero(state as any))).toEqual(cartItems);
  });

  test('Get Cart Total Cost', () => {
    const cartItem = { ...MakeTestCartItem() };
    const cartItemTwo = { ...MakeTestCartItem(), id: 'test' };
    const cartItems = [cartItem, cartItemTwo];
    const state = mockStoreCartState({ [CartSelectorEnum.CartItems]: cartItems });
    expect(selectors.getTotalCartCost(state as any).toObject()).toEqual(
      DineroFactory({ amount: 2000, currency: 'EUR' }).toObject()
    );
  });

  test('Get Cart Store', () => {
    const cartItem = MakeTestCartItem();
    const store = MakeTestStore();
    const state = {
      ...mockStoreCartState({ [CartSelectorEnum.CartItems]: [cartItem] }),
      [StoresSelectorEnum.Stores]: {
        [StoresSelectorEnum.Data]: {
          [store.id]: store,
        },
      },
    };
    expect(selectors.getTotalCartCost(state as any).toObject()).toEqual(
      DineroFactory({ amount: 1000, currency: 'EUR' }).toObject()
    );
  });
});
