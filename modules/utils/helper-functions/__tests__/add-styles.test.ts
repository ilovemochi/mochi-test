import { addStyles } from '../index';

const makeSut = () => ({ sut: addStyles });

describe(addStyles.name, () => {
  it('expect addStyle to be object of array', () => {
    const { sut } = makeSut();
    const result = sut({ key: `value`, key2: 'value2' } as any);
    expect(typeof result).toBe('object');
    expect(result).toEqual(['', 'value', 'value2']);
  });
});
