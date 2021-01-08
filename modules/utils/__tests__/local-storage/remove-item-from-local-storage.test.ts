import { LocalStorageMock } from '../../__mocks__/utils-mock';
import { removeItemFromLocalStorage } from '../../local-storage';

const makeSut = () => ({ sut: removeItemFromLocalStorage });
describe('remove item from local storage', () => {
  Object.defineProperty(window, 'localStorage', { value: LocalStorageMock() });

  it('expect to be true and removes the value', () => {
    const { sut } = makeSut();
    const id = 'any_id';
    localStorage.setItem(id, JSON.stringify({ key: 'value' }));
    const result = sut(id);
    expect(result).toBe(true);
    expect(localStorage.removeItem).toHaveBeenCalledWith(id);
    expect(localStorage.getItem(id)).toBeUndefined();
  });
});
