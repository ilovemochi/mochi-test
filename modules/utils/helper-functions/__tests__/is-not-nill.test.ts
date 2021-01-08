import { isNotNil } from '../index';

const makeSut = () => ({ sut: isNotNil });

describe('isNotNil', () => {
  it('Checks if the input value is not null or undefined', () => {
    const data = { name: 'mochi' };
    const { sut } = makeSut();
    const result = sut(data);
    expect(result).toBe(true);
  });
  it('Checks if the input value is  undefined', () => {
    const { sut } = makeSut();
    const result = sut(undefined);
    expect(result).toBe(false);
  });
  it('Checks if the input value is  null', () => {
    const { sut } = makeSut();
    const result = sut(null);
    expect(result).toBe(false);
  });
});
