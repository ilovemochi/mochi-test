import * as API from '@api';
import Route from '@constants/routes';
import { PaymentType, Store } from '@ilovemochi/enums';
import { IGenericObject } from '@ilovemochi/types';
import {
  makeSagaArgument,
  MakeTestCartItem,
  MakeTestCashOrder,
  MakeTestClientAPIResponse,
  MakeTestClientOrderInformation,
  MakeTestStore,
  MakeTestStripeOrder,
  MakeTestStripePaymentMethod,
  MakeTestTPAOrder,
  MakeTestUser,
  recordSaga,
} from '@test-utils';
import DineroFactory from 'dinero.js';
import Router from 'next/router';
import { omit } from 'ramda';

import { clearCartStart, closeCart } from '../../../cart/cart.actions';
import { CartSelectorEnum } from '../../../cart/cart.enum';
import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import { StoresSelectorEnum } from '../../../stores/stores.enum';
import { setAccessToken } from '../../../user/user.actions';
import { UserEnum } from '../../../user/user.enum';
import { createOrderObject } from '../../helper-function';
import * as actions from '../../order.actions';
import { OrderSelectorEnum } from '../../order.enum';
import { createOrder } from '../../order.sagas';

jest.mock('@api', () => ({ PostPay: jest.fn() }));
jest.mock('next/router', () => ({ push: jest.fn() }));
jest.mock('../../helper-function', () => ({
  createOrderObject: jest.fn().mockReturnValue({}),
}));

const user = MakeTestUser() as any;
const client = MakeTestClientOrderInformation();
const cartItem = MakeTestCartItem();
const store = MakeTestStore();
const stripeOrder = MakeTestStripeOrder();
const cashOrder = MakeTestCashOrder();
const tpaOrder = MakeTestTPAOrder();
const error = {
  code: 10000,
  value: null,
};

const fee = DineroFactory({ amount: 300, currency: 'EUR' });
const cartItems = [cartItem];

const stripeOrderResponse = MakeTestClientAPIResponse(stripeOrder);
const cashOrderResponse = MakeTestClientAPIResponse(cashOrder);
const tpaOrderResponse = MakeTestClientAPIResponse(tpaOrder);

const state = {
  [UserEnum.User]: {
    [UserEnum.Data]: user,
    [UserEnum.AccessToken]: 'access_token_2',
  },
  [OrderSelectorEnum.Order]: {
    [OrderSelectorEnum.Client]: client,
    [OrderSelectorEnum.DeliveryFee]: fee.toObject(),
  },
  [CartSelectorEnum.Cart]: {
    [CartSelectorEnum.CartItems]: cartItems,
    [CartSelectorEnum.StoreId]: cartItem.store.id,
  },
  [StoresSelectorEnum.Stores]: {
    [StoresSelectorEnum.Data]: {
      [cartItem.store.id]: store,
    },
  },
};

describe(createOrder.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`calls API Post Pay and ${actions.createOrderSuccess.name} Stripe if no error is thrown`, async () => {
    (API as IGenericObject<any>).PostPay = jest.fn().mockResolvedValue(stripeOrderResponse);

    const argument = makeSagaArgument({
      method: MakeTestStripePaymentMethod(),
      type: PaymentType.CreditCard,
    });

    const dispatched = await recordSaga(state, createOrder, argument);

    expect(API.PostPay).toHaveBeenCalledTimes(1);
    expect(API.PostPay).toHaveBeenCalledWith({ payload: {}, accessToken: 'access_token_2' });
    expect(createOrderObject).toHaveBeenCalledWith({
      clientOrderInformation: client,
      cartTotalCost: DineroFactory({ amount: 1000, precision: 2, currency: 'EUR' }).toObject(),
      cartItems,
      user,
      paymentType: PaymentType.CreditCard,
      paymentMethod: MakeTestStripePaymentMethod(),
      deliveryFee: fee.toObject(),
      store: {
        id: store.id,
        location: store.location,
        name: store[Store.Name],
      },
    });
    expect(dispatched).toContainEqual(setAccessToken('access_token'));
    expect(dispatched).toContainEqual(actions.createOrderSuccess(stripeOrder));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11206)));
    expect(dispatched).toContainEqual(clearCartStart());
    expect(dispatched).toContainEqual(closeCart());
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(Route.LastOrder);
  });

  test(`calls API Post and ${actions.createOrderSuccess.name} Cash if no error is thrown`, async () => {
    (API as IGenericObject<any>).PostPay = jest
      .fn()
      .mockResolvedValue(omit(['authData'], cashOrderResponse));

    const argument = makeSagaArgument({
      method: null,
      type: PaymentType.Cash,
      change: 1000,
    });

    const dispatched = await recordSaga(state, createOrder, argument);

    expect(createOrderObject).toHaveBeenCalledWith({
      clientOrderInformation: client,
      cartTotalCost: DineroFactory({ amount: 1000, precision: 2, currency: 'EUR' }).toObject(),
      cartItems,
      user,
      paymentType: PaymentType.Cash,
      paymentMethod: null,
      deliveryFee: fee.toObject(),
      store: {
        id: store.id,
        location: store.location,
        name: store[Store.Name],
      },
    });
    expect(API.PostPay).toHaveBeenCalledTimes(1);
    expect(API.PostPay).toHaveBeenCalledWith({
      payload: {
        change: DineroFactory({ amount: 1000, currency: 'EUR', precision: 2 }).toObject(),
      },
      accessToken: 'access_token_2',
    });
    expect(dispatched).not.toContainEqual(setAccessToken('access_token_2'));
    expect(dispatched).toContainEqual(actions.createOrderSuccess(cashOrder));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11206)));
    expect(dispatched).toContainEqual(clearCartStart());
    expect(dispatched).toContainEqual(closeCart());
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(Route.LastOrder);
  });

  test(`calls API Post and ${actions.createOrderSuccess.name} TPA if no error is thrown`, async () => {
    (API as IGenericObject<any>).PostPay = jest.fn().mockResolvedValue(tpaOrderResponse);

    const argument = makeSagaArgument({
      method: null,
      type: PaymentType.TPA,
    });

    const dispatched = await recordSaga(state, createOrder, argument);

    expect(createOrderObject).toHaveBeenCalledWith({
      clientOrderInformation: client,
      cartTotalCost: DineroFactory({ amount: 1000, precision: 2, currency: 'EUR' }).toObject(),
      cartItems,
      user,
      paymentType: PaymentType.TPA,
      paymentMethod: null,
      deliveryFee: fee.toObject(),
      store: {
        id: store.id,
        location: store.location,
        name: store[Store.Name],
      },
    });
    expect(API.PostPay).toHaveBeenCalledTimes(1);
    expect(API.PostPay).toHaveBeenCalledWith({ payload: {}, accessToken: 'access_token_2' });
    expect(dispatched).toContainEqual(actions.createOrderSuccess(tpaOrder));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11206)));
    expect(dispatched).toContainEqual(clearCartStart());
    expect(dispatched).toContainEqual(closeCart());
    expect(Router.push).toHaveBeenCalledTimes(1);
    expect(Router.push).toHaveBeenCalledWith(Route.LastOrder);
  });

  test(`calls API Post and ${actions.createOrderFailure.name} if an error is thrown`, async () => {
    (API as IGenericObject<any>).PostPay = jest.fn().mockRejectedValue(error);
    const argument = makeSagaArgument({
      method: MakeTestStripePaymentMethod(),
      type: PaymentType.PayPal,
    });

    const dispatched = await recordSaga(state, createOrder, argument);

    expect(API.PostPay).toHaveBeenCalledTimes(1);
    expect(API.PostPay).toHaveBeenCalledWith({ payload: {}, accessToken: 'access_token_2' });
    expect(dispatched).toContainEqual(actions.createOrderFailure(error));
    expect(Router.push).toHaveBeenCalledTimes(0);
  });
});
