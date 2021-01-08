import { curryN } from 'ramda';

export enum LocalStorageKeys {
  Cart = 'CART_STORAGE_KEY',
}

export const getItemFromLocalStorage = (id: LocalStorageKeys) => {
  const localStorageRawData = localStorage.getItem(id);
  let result;

  if (!localStorageRawData) return;

  try {
    result = JSON.parse(localStorageRawData);
  } catch {
    localStorage.removeItem(id);
    result = undefined;
  }
  // eslint-disable-next-line consistent-return
  return result;
};

export const storeItemInLocalStorage = curryN(
  2,
  // eslint-disable-next-line no-void
  (id: string, data: any) => void localStorage.setItem(id, JSON.stringify(data))
);

export const removeItemFromLocalStorage = (id: string) => localStorage.removeItem(id);
