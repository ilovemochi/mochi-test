import { isString } from '../index';

const makeSut = () => ({ sut: isString });

describe('isString', () => {
  it('See if name is string', () => {
    const data = 'ilovemochi';
    const { sut } = makeSut();
    const result = sut(data);
    expect(result).toBe(true);
  });
  it.each([{}, [], () => {}, Symbol('hello'), null, undefined, 1, true])(
    'should return false for all non string types',
    result => {
      const { sut } = makeSut();
      expect(sut(result)).toBe(false);
    }
  );
});
