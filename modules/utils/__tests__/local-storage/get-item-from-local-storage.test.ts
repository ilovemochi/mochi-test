import { LocalStorageMock } from '../../__mocks__/utils-mock';
import { getItemFromLocalStorage } from '../../local-storage';

const makeSut = () => ({ sut: getItemFromLocalStorage });

describe('get item from local storage', () => {
  beforeEach(() => {
    (localStorage.getItem as any).mockClear();
    (localStorage.removeItem as any).mockClear();
  });

  Object.defineProperty(window, 'localStorage', { value: LocalStorageMock() });

  it('returns undefined if the localStorage does not contain the id', () => {
    const { sut } = makeSut();
    const result = sut('any_id' as any);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('any_id');
    expect(result).toBe(undefined);
  });

  it('return any_value if id exist', () => {
    const id: any = 'any_id';
    const data = { key: 'value' };
    localStorage.setItem(id, JSON.stringify(data));
    const { sut } = makeSut();
    const result = sut(id);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith(id);
    expect(localStorage.removeItem).not.toHaveBeenCalled();
    expect(result).toEqual(data);
  });

  it('returns undefined if there is an error and removes the item', () => {
    const id: any = 'any_id';
    localStorage.setItem(id, 'data');
    const { sut } = makeSut();
    const result = sut(id);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith(id);
    expect(localStorage.removeItem).toHaveBeenCalledWith(id);
    expect(result).toBeUndefined();
  });
});
