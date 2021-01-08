import { hasDuplicates } from '../index';

const makeSut = () => ({ sut: hasDuplicates });

describe(hasDuplicates.name, () => {
  it('expect to found duplicated values', () => {
    const { sut } = makeSut();
    const data = ['mochi', 'mochi'];
    expect(sut(data)).toBe(true);
  });
  it('does not expect found duplicated values', () => {
    const { sut } = makeSut();
    const data = ['ilove', 'mochi'];
    expect(sut(data)).toBe(false);
  });
});
