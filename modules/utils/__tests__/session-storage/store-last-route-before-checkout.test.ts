import { SessionStorageMock } from '../../__mocks__/utils-mock';
import { storeLastRouteBeforeCheckout } from '../../session-storage';

const makeSut = () => ({ sut: storeLastRouteBeforeCheckout });

describe(storeLastRouteBeforeCheckout.name, () => {
  Object.defineProperty(window, 'sessionStorage', { value: SessionStorageMock() });

  const value = { key: 'value' };

  it('returns null if there is no window', () => {
    process.browser = false;
    const { sut } = makeSut();
    const result = sut(value);
    expect(result).toBe(false);
  });

  it('sets the value in the session storage', () => {
    process.browser = true;
    const { sut } = makeSut();
    sut(value);
    const result = window.sessionStorage.getItem('LAST_PATH_BEFORE_CHECKOUT');
    expect(result).toBe(JSON.stringify(value));
  });
});
