/* eslint-disable no-underscore-dangle */
import { MakeTestCartItem } from '@ilovemochi/test-suite';
import { makeSagaArgument, mockStoreCartState, recordSaga } from '@test-utils';
import { convertDineroToObject } from '@utils/helper-functions';
import { LocalStorageKeys } from '@utils/local-storage';
import DineroFactory, { Currency } from 'dinero.js';

import { CartItemDineroObject } from '../../state.types';
import * as actions from '../cart.actions';
import { CartSelectorEnum } from '../cart.enum';
import {
  addCartItem,
  clearCart,
  clearItemFromCart,
  refreshCartItemsFromLocalStorage,
  removeItemFromCart,
} from '../cart.sagas';
import { updateCartItemsQuantity } from '../cart.sagas-helper';

describe('cart sagas', () => {
  const cartItem = MakeTestCartItem();
  const cartItems = [cartItem];
  const serialized = JSON.stringify(cartItems);

  beforeEach(() => {
    localStorage.__STORE__[LocalStorageKeys.Cart] = {};
    jest.clearAllMocks();
  });

  test(`refreshes the store from the local storage with ${actions.checkLocalStorageStart.name} action`, async () => {
    localStorage.__STORE__[LocalStorageKeys.Cart] = serialized;

    const fakeStore = mockStoreCartState({
      [CartSelectorEnum.CartItems]: cartItems,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(fakeStore, refreshCartItemsFromLocalStorage);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith(LocalStorageKeys.Cart);
    expect(dispatched).toContainEqual(actions.addCartItemSuccess(cartItems));
  });

  test(`add new item to store with the ${actions.addCartItemStart.name} action`, async () => {
    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: [],
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(fakeState, addCartItem, makeSagaArgument(cartItem));

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(LocalStorageKeys.Cart, serialized);
    expect(dispatched).toContainEqual(actions.addCartItemSuccess(cartItems));
  });

  test(`increases the item quantity if the item has been added to the cart before with the ${actions.addCartItemStart.name} action`, async () => {
    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: cartItems,
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(fakeState, addCartItem, makeSagaArgument(cartItem));
    const updatedCartItems = updateCartItemsQuantity(cartItems, cartItem.id, true);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LocalStorageKeys.Cart,
      JSON.stringify(updatedCartItems)
    );
    expect(dispatched).toContainEqual(actions.addCartItemSuccess(updatedCartItems));
  });

  test(`updates the ${CartSelectorEnum.CartItems} list with a new item if they are different with the ${actions.addCartItemStart.name} action`, async () => {
    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: cartItems,
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const anotherCartItem = { ...cartItem, id: 'another_cart_item' };
    const result = [cartItem, anotherCartItem];

    const dispatched = await recordSaga(fakeState, addCartItem, makeSagaArgument(anotherCartItem));
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LocalStorageKeys.Cart,
      JSON.stringify(result)
    );
    expect(dispatched).toContainEqual(actions.addCartItemSuccess(result));
  });

  test(`reduces the quantity of an item by one if the item is already present in the ${CartSelectorEnum.CartItems} with the ${actions.removeCartItemStart.name} action`, async () => {
    const defaultStateCartItem = {
      ...cartItem,
      quantity: 2,
      money: DineroFactory({
        amount: cartItem.price,
        currency: cartItem.money.currency,
        precision: 2,
      }).add(
        DineroFactory({
          amount: cartItem.price as number,
          currency: cartItem.money?.currency as Currency,
        })
      ),
    };

    const defaultStateCartItems = ([
      convertDineroToObject(defaultStateCartItem),
    ] as unknown) as ReadonlyArray<CartItemDineroObject>;

    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: defaultStateCartItems,
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(
      fakeState,
      removeItemFromCart,
      makeSagaArgument(cartItem.id)
    );

    const updatedCartItems = updateCartItemsQuantity(defaultStateCartItems, cartItem.id, false);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LocalStorageKeys.Cart,
      JSON.stringify(updatedCartItems)
    );
    expect(dispatched).toContainEqual(actions.removeCartItemSuccess(updatedCartItems));
  });

  test(`removes the item if its quantity is set at and the id is passed to the action ${actions.removeCartItemStart.name}`, async () => {
    const cartItemOne = cartItem;
    const cartItemTwo = { ...cartItem, id: '2' };
    const defaultStateCartItems = [cartItemOne, cartItemTwo];
    const updatedCartItems = [{ ...cartItem, id: '2' }];

    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: defaultStateCartItems,
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(
      fakeState,
      removeItemFromCart,
      makeSagaArgument(cartItem.id)
    );

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LocalStorageKeys.Cart,
      JSON.stringify(updatedCartItems)
    );
    expect(dispatched).toContainEqual(actions.removeCartItemSuccess(updatedCartItems));
  });

  test(`removes a cart item regardless of the quantity with ${actions.clearCartItemStart.name}`, async () => {
    const data = { ...cartItem, quantity: 3 };
    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: [data],
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(
      fakeState,
      clearItemFromCart,
      makeSagaArgument(cartItem.id)
    );

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(LocalStorageKeys.Cart, JSON.stringify([]));
    expect(dispatched).toContainEqual(actions.clearCartItemSuccess([]));
  });

  test(`clears the entire cart regardless of the amount of items with the ${actions.clearCartStart.name}`, async () => {
    const data = { ...cartItem, quantity: 3 };
    const dataTwo = { ...cartItem, quantity: 1, id: 'some_random_id' };
    const defaultStateCartItems = [data, dataTwo];

    const fakeState = mockStoreCartState({
      [CartSelectorEnum.CartItems]: defaultStateCartItems,
      [CartSelectorEnum.StoreName]: cartItem.store.name,
      [CartSelectorEnum.StoreId]: cartItem.store.id,
    });

    const dispatched = await recordSaga(fakeState, clearCart);
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledWith(LocalStorageKeys.Cart);
    expect(dispatched).toContainEqual(actions.clearCartSuccess());
  });
});
