import { GetMoneyData } from '../helper-products.types';
import { getMoney } from '../index';

const makeSut = () => ({ sut: getMoney });

describe(getMoney.name, () => {
  const data: GetMoneyData = { currency: 'AOA', price: 0.0 };
  it('return response if we call getMoney with data ', () => {
    const { sut } = makeSut();

    const result = sut(data);
    expect(result).toHaveProperty('add');
    expect(result).toHaveProperty('multiply');
  });
});
