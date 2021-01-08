import { LocalStorageKeys } from '../../local-storage';

describe('Local Storage Keys', () => {
  test('if local storage keys has Cart property with the right value', () => {
    expect(LocalStorageKeys).toHaveProperty('Cart');
    expect(LocalStorageKeys).toEqual({ Cart: 'CART_STORAGE_KEY' });
  });
});
