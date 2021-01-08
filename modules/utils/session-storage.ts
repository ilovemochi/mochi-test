import { curryN } from 'ramda';

import Route from '../constants/routes';

enum SessionStorageKeys {
  CheckoutLastPath = 'LAST_PATH_BEFORE_CHECKOUT',
  PathAfterLogin = 'PATH_AFTER_LOGIN',
}

type TRemoveSessionStorageItem = (key: string) => void;
type TSetSessionStorageItem = (key: string, value: any) => void;
type TGetSessionStorageItem = (key: string, defaultValue?: any) => any;

export const getSessionStorageItem: TGetSessionStorageItem = (key, defaultValue) => {
  if (process.browser) {
    try {
      // @ts-ignore
      return JSON.parse(window.sessionStorage.getItem(key));
    } catch {
      return defaultValue;
    }
  } else return null;
};

export const setSessionStorageItem: TSetSessionStorageItem = (key, value) =>
  process.browser && window.sessionStorage.setItem(key, JSON.stringify(value));

export const removeSessionStorageItem: TRemoveSessionStorageItem = key =>
  process.browser && window.sessionStorage.removeItem(key);

export const storeLastRouteBeforeCheckout = curryN(
  2,
  setSessionStorageItem
)(SessionStorageKeys.CheckoutLastPath);

export const getLastRouteBeforeCheckout = (fn = getSessionStorageItem) =>
  fn(SessionStorageKeys.CheckoutLastPath, `${Route.MochiNight}`);

export const storePathAfterLogin = curryN(
  2,
  setSessionStorageItem
)(SessionStorageKeys.PathAfterLogin);

export const getPathAfterLogin = (fn = getSessionStorageItem) =>
  fn(SessionStorageKeys.PathAfterLogin);

export const deletePathAfterLogin = (fn = removeSessionStorageItem) =>
  fn(SessionStorageKeys.PathAfterLogin);
