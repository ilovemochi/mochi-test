import { MakeTestCartItem } from '@ilovemochi/test-suite';
import DineroFactory from 'dinero.js';

import { convertDineroToObject } from '../index';

const makeSut = () => ({ sut: convertDineroToObject });

describe('convertDineroToObject', () => {
  it('converts the key money to dinero object', () => {
    const { sut } = makeSut();
    const cartItem = MakeTestCartItem();
    const modifiedCartItem = {
      ...cartItem,
      quantity: 2,
      money: DineroFactory({
        amount: cartItem.price,
        currency: cartItem.money.currency,
        precision: 2,
      }),
    };

    const result = sut(modifiedCartItem);
    expect(result.money).toEqual(cartItem.money);
  });
});
