import { isBoolean } from '../index';

const makeSut = () => ({ sut: isBoolean });

describe('isBoolean', () => {
  it.each([
    [{}, false],
    [[], false],
    [() => {}, false],
    [Symbol('hello'), false],
    [null, false],
    [undefined, false],
    [1, false],
    [true, true],
    [false, true],
  ])('if %p should return %p', (test, result) => {
    const { sut } = makeSut();
    expect(sut(test)).toBe(result);
  });
});
