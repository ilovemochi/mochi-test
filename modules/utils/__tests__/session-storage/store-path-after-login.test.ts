import { SessionStorageMock } from '../../__mocks__/utils-mock';
import Route from '../../../constants/routes';
import { storePathAfterLogin } from '../../session-storage';

const makeSut = () => ({ sut: storePathAfterLogin });

describe(storePathAfterLogin.name, () => {
  Object.defineProperty(window, 'sessionStorage', { value: SessionStorageMock() });

  const value = Route.MochiNight;

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
    const result = window.sessionStorage.getItem('PATH_AFTER_LOGIN');
    expect(result).toBe(JSON.stringify(value));
  });
});
