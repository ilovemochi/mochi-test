import DineroFactory from 'dinero.js';

import { convertObjectToDinero, formatMoney } from '../index';

const makeSut = () => ({ sut: formatMoney });

describe('formatMoney', () => {
  it('returns the the format money e.g: AOA 10.00', () => {
    const objectDinero: DineroFactory.DineroObject = {
      amount: 1000,
      currency: 'AOA',
      precision: 2,
    };
    const { sut } = makeSut();
    const format = sut(convertObjectToDinero(objectDinero));

    expect(typeof format).toEqual('string');
    expect(format.replace(/\s/, ' ')).toEqual('AOA 10.00');
  });
});
