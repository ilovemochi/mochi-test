import { MakeTestCartItem } from '@ilovemochi/test-suite';
import DineroFactory from 'dinero.js';

import { mapDineroToObject } from '../index';

const makeSut = () => ({ sut: mapDineroToObject });

describe(mapDineroToObject.name, () => {
  it('converts an array of object money values from dinero to dinero object', () => {
    const { sut } = makeSut();

    const baseCartItem = MakeTestCartItem();

    const cartItem = {
      ...baseCartItem,
      quantity: 2,
      money: DineroFactory({
        amount: baseCartItem.price,
        currency: baseCartItem.money.currency,
        precision: 2,
      }),
    };
    const cartItemTwo = {
      ...baseCartItem,
      id: 'any_id',
      quantity: 4,
      money: DineroFactory({
        amount: baseCartItem.price,
        currency: baseCartItem.money.currency,
        precision: 2,
      }),
    };
    const cartItems = [cartItem, cartItemTwo];

    const result = sut(cartItems);
    const fst = result[0];
    const snd = result[1];
    expect(fst.money).toEqual(baseCartItem.money);
    expect(snd.money).toEqual(baseCartItem.money);
  });
});
