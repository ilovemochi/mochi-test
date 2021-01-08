import { MakeTestCartItem } from '@ilovemochi/test-suite';

import { mapObjectToDinero } from '../index';

const makeSut = () => ({ sut: mapObjectToDinero });

describe(mapObjectToDinero.name, () => {
  it('converts an array of object money values from dinero object to dinero', () => {
    const { sut } = makeSut();

    const baseCartItem = MakeTestCartItem();

    const cartItems = [baseCartItem, baseCartItem];

    const result = sut(cartItems);
    const fst = result[0];
    const snd = result[1];
    expect(fst.money).toHaveProperty('getAmount');
    expect(fst.money).toHaveProperty('getCurrency');
    expect(fst.money).toHaveProperty('getPrecision');
    expect(fst.money).toHaveProperty('add');
    expect(snd.money).toHaveProperty('getAmount');
    expect(snd.money).toHaveProperty('getCurrency');
    expect(snd.money).toHaveProperty('getPrecision');
    expect(snd.money).toHaveProperty('add');
  });
});
