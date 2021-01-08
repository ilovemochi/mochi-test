import { LocalStorageMock } from '../../__mocks__/utils-mock';
import { storeItemInLocalStorage } from '../../local-storage';

jest.mock('ramda', () => ({ curryN: jest.fn().mockReturnValue('') }));
const makeSut = () => ({ sut: storeItemInLocalStorage });

describe('store item in local storage', () => {
  Object.defineProperty(window, 'localStorage', { value: LocalStorageMock() });

  it('expect setItem to be called with the right params', () => {
    const payload = { id: 'any_id', data: 'any_data' };
    const { sut } = makeSut();
    sut(payload.id, payload.data);
    expect(localStorage.setItem).toHaveBeenCalledWith(payload.id, JSON.stringify(payload.data));

    const subSut = sut(payload.id);
    subSut(payload.data);
    expect(localStorage.setItem).toHaveBeenCalledWith(payload.id, JSON.stringify(payload.data));
  });
});
