import { SessionStorageMock } from '../../__mocks__/utils-mock';
import Route from '../../../constants/routes';
import { getSessionStorageItem } from '../../session-storage';

const makeSut = () => ({ sut: getSessionStorageItem });

describe(getSessionStorageItem.name, () => {
  Object.defineProperty(window, 'sessionStorage', { value: SessionStorageMock() });

  const defaultValue: any = Route.Home;
  const value: any = Route.MochiNight;
  const key: string = 'any_key';

  it('returns null if there is no window', () => {
    process.browser = false;
    const { sut } = makeSut();
    const result = sut(key, defaultValue);
    expect(result).toBeNull();
  });

  it('returns the defaultValue if there is no item in the session storage', () => {
    process.browser = true;
    const { sut } = makeSut();
    const result = sut(key, defaultValue);
    expect(result).toBe(Route.Home);
  });

  it('returns the value stored if there is one', () => {
    process.browser = true;
    sessionStorage.setItem(key, JSON.stringify(value));
    const { sut } = makeSut();
    const result = sut(key, defaultValue);
    expect(result).toEqual(Route.MochiNight);
  });
});
