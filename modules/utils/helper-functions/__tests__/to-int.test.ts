import { toInt } from '../index';

const makeSut = () => ({ sut: toInt });

describe('toInt', () => {
  it('convert string to integer numbers ', () => {
    const { sut } = makeSut();
    const result = sut(10, '2.2');
    expect(result).toBe(2);
  });
});
