import { toUpperCase } from '../index';

const makeSut = () => ({ sut: toUpperCase });

describe('toUpperCase', () => {
  it('transform the given string into UpperCase', () => {
    const { sut } = makeSut();
    const result = sut('ilovemochi');
    expect(result).toBe('ILOVEMOCHI');
  });
});
