import { getPastYear } from '../index';

const makeSut = () => ({ sut: getPastYear });

describe('getPastYear', () => {
  it('expect to getPastYear be the difference between pastYear and todayYear', () => {
    const { sut } = makeSut();
    const today = new Date();
    const result = sut(10);

    expect(result.getFullYear()).toBe(today.getFullYear() - 10);
  });
});
