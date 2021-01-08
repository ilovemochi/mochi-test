import { ICartItem, IGenericObject } from '@ilovemochi/types';
import { LocalStorageKeys, storeItemInLocalStorage } from '@utils/local-storage';
import DineroFactory, { Currency } from 'dinero.js';
import {
  applySpec,
  converge,
  dec,
  equals,
  identity,
  ifElse,
  inc,
  map,
  mergeLeft,
  o,
  path,
  prop,
} from 'ramda';

import { State } from '../state.types';
import { CartSelectorEnum } from './cart.enum';

export const storeCartDataToLocalStorage = storeItemInLocalStorage(LocalStorageKeys.Cart);

export const mapWith = (mapProp: string, match: unknown) => (x: IGenericObject<any>) =>
  prop(mapProp)(x) === match;

const getAmount = path<DineroFactory.DineroObject>(['money', 'amount']);

const getCurrency = path<DineroFactory.DineroObject>(['money', 'currency']);

const processDinero = (add: boolean) => (x: ICartItem<DineroFactory.DineroObject>) =>
  DineroFactory({
    amount: (getAmount(x) as unknown) as number,
    currency: (getCurrency(x) as unknown) as Currency,
    precision: 2,
  })
    [add ? 'add' : 'subtract'](
      DineroFactory({
        amount: x.price,
        currency: x.money.currency,
      })
    )
    .toObject();

export const updateCartItemsQuantity = (
  array: ReadonlyArray<ICartItem<DineroFactory.DineroObject>>,
  id: string,
  add: boolean
) =>
  map(
    ifElse(
      o(equals(id), prop('id')),
      converge(mergeLeft, [
        applySpec({
          quantity: o(add ? inc : dec, prop<'quantity', number>('quantity')),
          money: processDinero(add),
        }),
        identity,
      ]),
      identity
    )
  )(array);

export const getCartState = (state: State) => state[CartSelectorEnum.Cart];
