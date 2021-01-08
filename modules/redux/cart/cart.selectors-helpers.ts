import { ICartItem, IStore } from '@ilovemochi/types';
import { isNotNil, mapObjectToDinero } from '@utils/helper-functions';
import DineroFactory from 'dinero.js';
import {
  add,
  always,
  and,
  converge,
  F,
  identity,
  ifElse,
  length,
  o,
  path,
  pathOr,
  prop,
  reduce,
  useWith,
} from 'ramda';

import { CartState, State } from '../state.types';
import { StoresSelectorEnum } from '../stores/stores.enum';
import { CartSelectorEnum } from './cart.enum';

export const addCartItemsQuantity = (reduce<ICartItem, number>(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useWith(add, [identity, prop('quantity')]),
  0
) as unknown) as (arg: ReadonlyArray<ICartItem>) => number;

export const lengthGuard = ifElse(
  converge(and, [ifElse(Array.isArray, o(Boolean, length), F), isNotNil]),
  identity,
  always([{ quantity: 0 }])
);

export const takeCartItemsDinero = (o(
  mapObjectToDinero,
  path([CartSelectorEnum.Cart, CartSelectorEnum.CartItems]) as any
) as unknown) as (x: State) => ReadonlyArray<ICartItem>;

export const takeCartItemsDineroObject = pathOr(
  [],
  [CartSelectorEnum.Cart, CartSelectorEnum.CartItems]
) as (x: State) => CartState['cartItems'];

export const calculateTotalCartCost = o(
  cartItems =>
    cartItems.length
      ? cartItems.reduce(
          (acc, cartItem) => cartItem.money.add(acc),
          DineroFactory({ amount: 0, currency: cartItems[0].money.getCurrency() })
        )
      : DineroFactory({ amount: 0, currency: 'EUR' }),
  takeCartItemsDinero
);

export const getStoreName = path([CartSelectorEnum.Cart, CartSelectorEnum.StoreName]) as (
  x: State
) => CartState[CartSelectorEnum.StoreName];

export const getStoreId = path([CartSelectorEnum.Cart, CartSelectorEnum.StoreId]) as (
  x: State
) => CartState[CartSelectorEnum.StoreId];

export const getInCartVisible = path([CartSelectorEnum.Cart, CartSelectorEnum.Visible]) as (
  x: State
) => CartState[CartSelectorEnum.Visible];

export const getStore = converge(
  (state: State, id: string) => state[StoresSelectorEnum.Stores][StoresSelectorEnum.Data][id],
  [identity, getStoreId]
) as (x: State) => IStore | undefined;
