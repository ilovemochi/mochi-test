import { isWindowAPISupported } from '../index';

const makeSut = () => ({ sut: isWindowAPISupported });

describe('isWindowAPISupported', () => {
  it('expect to return true if in the browser and local storage is supported', () => {
    const { sut } = makeSut();
    expect(sut('localStorage')).toBe(true);
  });

  it('expect to return true if in the browser and local storage is supported', () => {
    process.browser = false;
    const { sut } = makeSut();
    expect(sut('localStorage')).toBe(false);
  });
});
