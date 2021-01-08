import { getFormattedAddress } from '../index';

const makeSut = () => ({ sut: getFormattedAddress });

describe(getFormattedAddress.name, () => {
  test('If the given, non-null object has formatted_address property and returns the value of that property. Otherwise returns the ""', () => {
    const { sut } = makeSut();
    const address: any = { formatted_address: 'formatted address' };
    const address2: any = { wrong_property: 'does not contain this property' };

    expect(sut(address)).toBe('formatted address');
    expect(sut(address2)).toBe('');
  });
});
