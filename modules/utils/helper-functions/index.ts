import { getProductsImageUrl } from '@api';
export const Breakpoints = {
  forPhoneOnly: 599,
  forTabletPortraitUp: 600,
  forTabletLandscapeUp: 900,
  forDesktopUp: 1200,
  forBigDesktopUp: 1800,
};
export enum Store {
  PaymentType = 'paymentType',
  Id = 'id',
  MinimumAge = 'minimumAge',
  Name = 'name',
  Categories = 'categories',
  OpeningHours = 'openingHours',
  DeliveryPolicy = 'deliveryPolicy',
  Location = 'location',
  Type = 'type',
  SubType = 'subType',
  Currency = 'currency',
}

export enum User {
  Id = 'id',
  Name = 'name',
  BirthDate = 'birthDate',
  Email = 'email',
  Gender = 'gender',
  Location = 'location',
  Password = 'password',
  Phone = 'phone',
  Roles = 'roles',
  PaymentProviders = 'paymentProviders',
  WhatsApp = 'whatsApp',
  NIF = 'nif',
  PasswordConfirmation = 'passwordConfirmation',
  ResetPasswordToken = 'resetPasswordToken',
  ResetPasswordExpires = 'resetPasswordExpires',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export enum Address {
  City = 'city',
  Zip = 'zip',
  Floor = 'floor',
  Street = 'street',
  Country = 'country',
}
export enum Cities {
  Lisbon = 'lisbon',
  Luanda = 'luanda',
}
export enum Countries {
  Portugal = 'portugal',
  Angola = 'angola',
}
export enum Location {
  Coordinates = 'coordinates',
  Address = 'address',
  Type = 'type',
  Lat = 'lat',
  Lng = 'lng',
}

export enum ProductStore {
  StoreId = 'storeId',
  DiscountPrice = 'discountPrice',
  Price = 'price',
  Available = 'available',
  Currency = 'currency',
}
export enum Product {
  Container = 'container',
  FullName = 'fullName',
  Category = 'category',
  SubCategory = 'subCategory',
  Type = 'type',
  Name = 'name',
  Size = 'size',
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Stores = 'stores',
  Tags = 'tags',
}

export interface IProduct {
  [Product.Id]: string;
  [Product.FullName]: string;
  [Product.Name]: string;
  [Product.Container]: IProductsContainer;
  [Product.Category]: IProductsCategory;
  [Product.SubCategory]: IProductsSubCategory;
  [Product.Type]: string;
  [Product.Tags]: ReadonlyArray<string>;
  [Product.Image]: IProductImage;
  [Product.Size]: IProductSize;
  [Product.Stores]: ReadonlyArray<IProductStore>;
  [Product.CreatedAt]: Date;
}
export enum Images {
  Small = 'small',
  Medium = 'medium',
}

export interface IProductImage {
  [Images.Small]: string;
  [Images.Medium]: string;
}
export interface IProductStore {
  [ProductStore.StoreId]: string;
  [ProductStore.Price]: number;
  [ProductStore.Currency]: Currency;
  [ProductStore.DiscountPrice]: number | null;
  [ProductStore.Available]: boolean;
}

import DineroFactory, { Currency } from 'dinero.js';
import R from 'ramda';
import { createElement as createEl } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import Route from '../../constants/routes';
import {
  GeocoderResult,
  IGenericObject,
  IProductsCategory,
  IProductsContainer,
  IProductSize,
  IProductsSubCategory,
} from '../../typescript';
import {
  Capitalize,
  ConvertDineroToObject,
  ConvertObjectToDinero,
  GetCookieValue,
  GetReactHookFormError,
  IAddStyles,
  IsString,
  LoadScript,
  MapLocationData,
  MediaQueryMap,
  MediaQueryMapValues,
  TGetFirstWord,
  TIsNew,
  TIsNotNil,
  TMapIndexed,
  TNoop,
  ToUpperCase,
  TToggleState,
} from './helper-functions.types';

export const capitalize: Capitalize = R.compose(
  R.join(''),
  R.juxt<any, string>([R.compose<string, string, string>(R.toUpper, R.head), R.tail])
);

export const getFirstWord = R.compose<string, string[], string | undefined>(
  R.head,
  R.split(' ')
) as TGetFirstWord;

export const mapIndexed = R.addIndex(R.map) as TMapIndexed;

export const toggleState: TToggleState = fn => () => fn((prevState: boolean) => !prevState);

export const addStyles: IAddStyles = props => {
  const styles = css`` as Array<FlattenSimpleInterpolation>;
  if (props) Object.values<FlattenSimpleInterpolation>(props).forEach(x => styles.push(x));
  return styles;
};

export const noop: TNoop = () => {};

export const mapLocation = (x: MapLocationData) =>
  ({
    [User.Location]: {
      [Location.Type]: 'Point',
      [Location.Coordinates]: [x[Location.Lng], x[Location.Lat]],
      [Location.Address]: {
        [Address.Zip]: x[Address.Zip],
        [Address.City]: x[Address.City],
        [Address.Country]: x[Address.Country],
        [Address.Street]: x[Address.Street],
      },
    },
  } as const);

export const copyPassword = x => ({ [User.PasswordConfirmation]: x[User.Password] });

export const objKeyBirthDateToString = R.over(R.lensProp(User.BirthDate), (x: Date) =>
  x.toISOString()
);

export const mapUserLocation = R.converge(R.mergeDeepRight, [
  R.omit([Address.Street, Address.City, Address.Country, Address.Zip, Location.Lat, Location.Lng]),
  mapLocation,
]);

export const toUpperCase: ToUpperCase = R.invoker(0, 'toUpperCase');

export const isNotNil: TIsNotNil = R.compose(R.not, R.isNil);

export const isNew: TIsNew = dateString => {
  const today = new Date();
  const month = 1000 * 60 * 60 * 24 * 30;
  const delta = today.getTime() - new Date(dateString).getTime();
  return month > delta;
};

export const getPastYear = (pastYears: number) => {
  const today = new Date();
  return new Date(today.setUTCFullYear(today.getUTCFullYear() - pastYears));
};

export const formatMoney = R.invoker(1, 'toFormat')('$0,0.00');

const getUser = R.converge(R.propOr, [R.always(''), R.identity]);
const getUserAddress = (property: string) =>
  R.pathOr('', [Store.Location, Location.Address, property]);

export const getUserName = getUser(User.Name);
export const getUserEmail = getUser(User.Email);
export const getUserPhoneNumber = getUser(User.Phone);
export const getUserWhatsapp = getUser(User.WhatsApp);
export const getUserBirthDate = getUser(User.BirthDate);
export const getUserGender = getUser(User.Gender);
export const getUserCity = getUserAddress(Address.City);
export const getUserCountry = getUserAddress(Address.Country);
export const getUserStreet = getUserAddress(Address.Street);
export const getUserZip = getUserAddress(Address.Zip);

const respondTo = (mediaQuery: 'max-' | 'min-') =>
  Object.keys(Breakpoints).reduce((accumulator, label) => {
    const emSize = Breakpoints[label as keyof typeof Breakpoints] / 16;
    accumulator[label] = content => css`
      @media (${mediaQuery}width: ${emSize}em) {
        ${content};
      }
    `;
    return accumulator;
  }, {} as IGenericObject<MediaQueryMapValues>);

export const maxWidth = respondTo('max-') as MediaQueryMap;
export const minWidth = respondTo('min-') as MediaQueryMap;

// Props -> Component -> Element
const createElement = R.curryN(2, createEl);

// mapProps :: (a -> a) -> Component -> Component
// eslint-disable-next-line react-hooks/rules-of-hooks
export const mapProps = R.flip(R.useWith(R.o, [createElement, R.identity]));

export const showNothing = R.always(null);

export const flippedMap = R.flip(R.map);

export const isDevelopment = !!+process.env.NEXT_PUBLIC_IS_DEVELOPMENT!;

export const getCookieHeaders = R.pathOr('', ['headers', 'cookie']);

export const isString: IsString = R.is(String);

export const isBoolean = R.is(Boolean);

/**
 * @function checks if the key exists in the window object to
 * @param key {string} the api to be used in window
 * @return {boolean} indicating if the window object supports the api or not
 */
export const isWindowAPISupported = (key: string) => (process.browser ? R.has(key, window) : false);

export const getWindowLocation = R.tryCatch(
  () => window.location.href.toString().split(window.location.host)[1],
  () => Route.Home
);

export const convertObjectToDinero = (x: DineroFactory.DineroObject): unknown =>
  DineroFactory({
    amount: x.amount,
    currency: x.currency,
    precision: 2,
  });

export const mapObjectToDinero = (R.map(
  R.over(R.lensProp('money'), (x: DineroFactory.DineroObject) =>
    DineroFactory({
      amount: x.amount,
      currency: x.currency,
      precision: 2,
    })
  )
) as unknown) as ConvertObjectToDinero;

export const convertDineroToObject = (R.over(R.lensProp('money'), x =>
  DineroFactory({
    amount: x.getAmount(),
    currency: x.getCurrency() as Currency,
    precision: 2,
  }).toObject()
) as unknown) as ConvertDineroToObject;

export const mapDineroToObject = R.map(convertDineroToObject);

export const toStoreProduct = (
  product: Exclude<IProduct, Product.Stores>,
  storeProduct: IProductStore
) => ({
  ...product,
  ...storeProduct,
});

const getProductStore = (storeId: string) =>
  R.compose<
    IProduct,
    ReadonlyArray<IProductStore>,
    ReadonlyArray<IProductStore>,
    IProductStore | undefined
  >(
    R.head,
    R.filter<any>(
      R.o(R.equals(storeId), R.prop<ProductStore.StoreId, string>(ProductStore.StoreId))
    ),
    R.prop<Product.Stores, ReadonlyArray<IProductStore>>(Product.Stores)
  );

export const productToStoreProduct = (storeId: string) =>
  R.converge(toStoreProduct, [R.dissoc(Product.Stores), getProductStore(storeId)]);

export const mapToStoreProduct = (storeId: string) => R.map(productToStoreProduct(storeId));

export const getCookieValue: GetCookieValue = ({ cookieName, cookie }) => {
  const cookieArray = cookie.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);
  return cookieArray ? cookieArray.pop() : '';
};

export const loadScript: LoadScript = ({ id, src, callback = noop, async = false }) => {
  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.async = async;
    document.body.appendChild(script);

    script.onload = callback;
    script.onerror = x => {
      throw new URIError(`The script ${R.pathOr('', ['target', 'scr'])(x)} didn't load correctly.`);
    };
  }

  if (existingScript && callback) callback();
};

export const removeScript = (id: string) => {
  const element = document.getElementById(id);

  // eslint-disable-next-line no-unused-expressions
  if (element) element.parentNode?.removeChild(element);
};

export const getFormattedAddress = R.propOr('', 'formatted_address');

export const pathLat = R.pathOr(R.always(null), ['geometry', 'location', 'lat']);

export const pathLng = R.pathOr(R.always(null), ['geometry', 'location', 'lng']);

export const formatGeoCodeResult = (result: GeocoderResult) => {
  const getLat = pathLat(result);
  const getLng = pathLng(result);
  return {
    street: getFormattedAddress(result) as string,
    lat: getLat(),
    lng: getLng(),
  };
};

export const getStreetFromPlaceObject = R.compose(
  R.ifElse(R.has('lat'), R.prop('street'), R.always('')),
  formatGeoCodeResult
);

export function hasDuplicates(array: Array<string>): boolean {
  const valuesSoFar = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const element of array) {
    if (element in valuesSoFar) {
      return true;
    }
    valuesSoFar[element] = true;
  }
  return false;
}

export const toInt = R.curryN(2, (radix: number, x: string) => parseInt(x, radix));

export const getReactHookFormError: GetReactHookFormError = ({ name, errors }) =>
  R.path([name, 'message'], errors);

export const enableScrolling = () => {
  if (process.browser) {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }
};

export const disableScrolling = () => {
  if (process.browser) window.onscroll = () => {};
};

export const generateImageLink = (image: IProductImage): IProductImage => ({
  small: getProductsImageUrl(image.small),
  medium: getProductsImageUrl(image.medium),
});

export * from './product';
export * from './user';
