import DineroFactory from 'dinero.js';

import { convertObjectToDinero } from '../index';

const makeSut = () => ({ sut: convertObjectToDinero });
describe('convertObjectToDinero', () => {
  it('expect object passed to converted to Dinero', () => {
    const { sut } = makeSut();
    const objectDinero: DineroFactory.DineroObject = {
      amount: 1000,
      currency: 'AOA',
      precision: 2,
    };
    const result = sut(objectDinero);
    expect(result).toHaveProperty('getAmount');
    expect(result).toHaveProperty('getCurrency');
    expect(result).toHaveProperty('getPrecision');
    expect(result).toHaveProperty('add');
  });
});
