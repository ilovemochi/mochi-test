import { getFirstWord } from '../index';

const makeSut = () => ({ sut: getFirstWord });

describe(getFirstWord.name, () => {
  const text = 'mochi website utils dir tests';
  it('to get the "mochi" from "mochi website utils dir tests"', () => {
    const { sut } = makeSut();
    expect(sut(text)).toBe('mochi');
  });
});
