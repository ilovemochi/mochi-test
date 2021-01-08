import { SessionStorageMock } from '../../__mocks__/utils-mock';
import { setSessionStorageItem } from '../../session-storage';

const makeSut = () => ({ sut: setSessionStorageItem });

describe(setSessionStorageItem.name, () => {
  Object.defineProperty(window, 'sessionStorage', { value: SessionStorageMock() });

  const value = { key: 'value' };
  const key: string = 'any_key';

  it('returns null if there is no window', () => {
    process.browser = false;
    const { sut } = makeSut();
    const result = sut(key, value);
    expect(result).toBe(false);
  });

  it('sets the value in the session storage', () => {
    process.browser = true;
    const { sut } = makeSut();
    sut(key, value);
    const result = window.sessionStorage.getItem(key);
    expect(result).toBe(JSON.stringify(value));
  });
});
