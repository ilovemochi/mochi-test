/* eslint import/no-extraneous-dependencies: 0 */
import { Gender, Languages, User } from '@ilovemochi/enums';
import { MakeTestLocation } from '@ilovemochi/test-suite';
import { IGenericObject } from '@ilovemochi/types';
import { render as __render } from '@testing-library/react';
import { renderHook as __renderHook, RenderHookOptions } from '@testing-library/react-hooks';
import * as __faker from 'faker';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import { applySpec, identity, mergeDeepRight, omit } from 'ramda';
import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { runSaga } from 'redux-saga';
import { ThemeProvider } from 'styled-components';

import lngDict from '../locales/en-US.json';
import { theme } from '../styles/theme';
import { LightTheme } from './design-system/themes/light-theme';
import { CartSelectorEnum } from './redux/cart/cart.enum';
import { OperationServiceStateKeys } from './redux/operation-service/operation-service.enum';
import { OrderSelectorEnum } from './redux/order/order.enum';
import rootReducer from './redux/root-reducer';
import { StoresSelectorEnum } from './redux/stores/stores.enum';
import { UserEnum } from './redux/user/user.enum';
import {
  GoogleUser,
  IncompleteUser,
  ISignUpUser,
  UserAdditionalInformation,
} from './redux/user/user.types';
import { CustomRenderOptions, Saga } from './test-utils.types';
import I18n from './utils/i18n';

const routerMock: NextRouter = {
  route: '',
  basePath: '',
  pathname: '',
  query: {},
  asPath: '',
  push: jest.fn().mockReturnValue(Promise.resolve()),
  replace: jest.fn().mockReturnValue(Promise.resolve()),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  isFallback: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
};

export const recordSaga = async (
  state = {},
  saga: Saga,
  initialAction: IGenericObject<any> | any = {}
) => {
  const dispatched: Array<IGenericObject<any>> = [];

  await runSaga(
    {
      dispatch: (action: IGenericObject<any>) => dispatched.push(action),
      getState: () => state,
    },
    saga,
    initialAction
  ).toPromise();

  return dispatched;
};

export const mockStoreUserState = (obj = {}) => ({
  [UserEnum.User]: {
    [UserEnum.Loading]: false,
    [UserEnum.Data]: null,
    [UserEnum.Error]: null,
    [UserEnum.HasLocation]: false,
    [UserEnum.AccessToken]: null,
    ...obj,
  },
});

export const mockStoreCartState = (obj = {}) => ({
  [CartSelectorEnum.Cart]: {
    [CartSelectorEnum.Visible]: false,
    [CartSelectorEnum.CartItems]: [],
    [CartSelectorEnum.StoreName]: null,
    [CartSelectorEnum.StoreId]: null,
    ...obj,
  },
});

export const mockStoreOrderState = (obj = {}) => ({
  [OrderSelectorEnum.Order]: {
    [OrderSelectorEnum.Loading]: false,
    [OrderSelectorEnum.Data]: null,
    [OrderSelectorEnum.Error]: false,
    [OrderSelectorEnum.DeliveryFee]: null,
    [OrderSelectorEnum.Client]: null,
    ...obj,
  },
});

export const mockStoreStoreState = (obj = {}) => ({
  [StoresSelectorEnum.Stores]: {
    [StoresSelectorEnum.Data]: {},
    [StoresSelectorEnum.Error]: false,
    ...obj,
  },
});

export const mockOperationServiceState = (obj = {}) => ({
  [OperationServiceStateKeys.OperationService]: {
    [OperationServiceStateKeys.Messages]: [],
    ...obj,
  },
});

export const MakeTestBaseUser = () => ({
  [User.Name]: __faker.name.firstName(),
  [User.WhatsApp]: __faker.phone.phoneNumber(),
  [User.Phone]: __faker.phone.phoneNumber(),
  [User.Email]: __faker.internet.email(),
  [User.Location]: MakeTestLocation(),
  [User.BirthDate]: __faker.date.recent(),
  [User.Gender]: Gender.Male,
});

export const MakeTestSignUpUser = (): ISignUpUser => ({
  [User.PasswordConfirmation]: 'password',
  [User.Password]: 'password',
  [User.Email]: __faker.internet.email(),
  [User.Name]: __faker.name.firstName(),
  [User.Name]: __faker.name.firstName(),
  [User.WhatsApp]: __faker.phone.phoneNumber(),
  [User.Phone]: __faker.phone.phoneNumber(),
  [User.Email]: __faker.internet.email(),
  [User.Location]: MakeTestLocation(),
  [User.BirthDate]: __faker.date.recent(),
  [User.Gender]: Gender.Male,
});

export const MakeTestUserAdditionalInformation = (): UserAdditionalInformation => ({
  ...MakeTestBaseUser(),
});

export const MakeTestGoogleUser = (): GoogleUser => ({
  idToken: __faker.random.uuid(),
  email: __faker.internet.email(),
  name: __faker.internet.userName(),
});

export const MakeTestIncompleteUser = (): IncompleteUser => ({
  email: __faker.internet.email(),
  id: __faker.random.uuid(),
});

export const mockStoreState = {
  [OperationServiceStateKeys.OperationService]: {
    [OperationServiceStateKeys.Messages]: [],
  },
  [StoresSelectorEnum.Stores]: {
    [StoresSelectorEnum.Data]: {},
    [StoresSelectorEnum.Error]: false,
  },
  [OrderSelectorEnum.Order]: {
    [OrderSelectorEnum.Loading]: false,
    [OrderSelectorEnum.Data]: null,
    [OrderSelectorEnum.Error]: false,
    [OrderSelectorEnum.DeliveryFee]: null,
    [OrderSelectorEnum.Client]: null,
  },
  [CartSelectorEnum.Cart]: {
    [CartSelectorEnum.Visible]: false,
    [CartSelectorEnum.CartItems]: [],
    [CartSelectorEnum.StoreName]: null,
    [CartSelectorEnum.StoreId]: null,
  },
  [UserEnum.User]: {
    [UserEnum.Loading]: false,
    [UserEnum.Data]: null,
    [UserEnum.Error]: null,
    [UserEnum.HasLocation]: false,
    [UserEnum.AccessToken]: null,
  },
};

export const makeSagaArgument = applySpec({ payload: identity });

export const Wrapper = (initialState = {}, newTheme = false): FC => ({ children }) => {
  const store = createStore(rootReducer, mergeDeepRight(mockStoreState)(initialState || {}));

  return (
    <RouterContext.Provider value={routerMock}>
      <Provider store={store}>
        <ThemeProvider theme={newTheme ? { ...theme, ...LightTheme } : theme}>
          <I18n lngDict={(lngDict as unknown) as Record<string, string>} locale={Languages.EN}>
            <div id="__next">{children}</div>
          </I18n>
        </ThemeProvider>
      </Provider>
    </RouterContext.Provider>
  );
};

/**
 * @description newTheme key is temporary until we refactor
 * @param reactElement
 * @param options
 * @param initialState
 * @param newTheme {boolean}
 */
const customRender = (reactElement: ReactElement, options: CustomRenderOptions = {}) =>
  __render(reactElement, {
    wrapper: Wrapper(options.initialState, options.newTheme),
    ...omit(['newTheme', 'initialState'], options),
  });

export function renderHook<P, R>(
  callback: (props: P) => R,
  options?: RenderHookOptions<P>,
  initialState = {}
) {
  return __renderHook(callback, { wrapper: Wrapper(initialState, true), ...options });
}

export { default as userEvent } from '@testing-library/user-event';

export * from '@testing-library/react';

export { customRender as render };

export * from '@ilovemochi/test-suite';

export const faker = __faker;
