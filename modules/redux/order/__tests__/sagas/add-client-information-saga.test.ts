import Route from '@constants/routes';
import { Store } from '@ilovemochi/enums';
import * as Logic from '@ilovemochi/logic';
import { IGenericObject } from '@ilovemochi/types';
import {
  makeSagaArgument,
  MakeTestCartItem,
  MakeTestClientOrderInformation,
  MakeTestStore,
  MakeTestUser,
  recordSaga,
} from '@test-utils';
import DineroFactory from 'dinero.js';
import Router from 'next/router';

import { CartSelectorEnum } from '../../../cart/cart.enum';
import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import { StoresSelectorEnum } from '../../../stores/stores.enum';
import { setUserOperationFailure } from '../../../user/user.actions';
import { UserEnum } from '../../../user/user.enum';
import * as actions from '../../order.actions';
import { OrderSelectorEnum } from '../../order.enum';
import { addClientInformation } from '../../order.sagas';

jest.mock('next/router', () => ({ push: jest.fn() }));
jest.mock('@ilovemochi/logic');
jest.mock('@utils/helper-functions', () => ({
  getLatLngCoordinates: jest.fn().mockReturnValue({ lat: 100, lng: 100 }),
  convertObjectToDinero: jest.fn(),
}));

const user = MakeTestUser() as any;
const client = MakeTestClientOrderInformation();
const cartItem = MakeTestCartItem();
const store = MakeTestStore();
const error = {
  code: 10000,
  value: null,
};

const fee = DineroFactory({ amount: 300, currency: 'EUR' });
const cartItems = [cartItem];

const state = {
  [UserEnum.User]: {
    [UserEnum.Data]: user,
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

describe(addClientInformation.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('adds the client information and delivery fee if successful', async () => {
    (Logic as IGenericObject<any>).calculateDeliveryFee = jest.fn().mockReturnValue(100);
    (Logic as IGenericObject<any>).toLatLng = jest.fn();

    const argument = makeSagaArgument(client);

    const dispatched = await recordSaga(state, addClientInformation, argument);

    expect(Logic.calculateDeliveryFee).toHaveBeenCalledWith({
      userLocation: { lat: 100, lng: 100 },
      storeLocation: { lat: 100, lng: 100 },
      deliveryPolicy: store[Store.DeliveryPolicy],
    });

    expect(dispatched).toContainEqual(actions.orderAddClientInformationSuccess(client));
    expect(dispatched).toContainEqual(
      actions.orderAddDeliveryFee(
        DineroFactory({ currency: store.currency, amount: 100, precision: 2 }).toObject()
      )
    );
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11207)));
    expect(Router.push).toHaveBeenCalledWith(Route.CheckoutCart);
  });

  it('calls the set user operation failure and add client information failure with the error if the delivery fee is -1', async () => {
    (Logic as IGenericObject<any>).calculateDeliveryFee = jest.fn().mockReturnValue(-1);
    (Logic as IGenericObject<any>).toLatLng = jest.fn();

    const argument = makeSagaArgument(client);

    const dispatched = await recordSaga(state, addClientInformation, argument);
    expect(Logic.calculateDeliveryFee).toHaveBeenCalledWith({
      userLocation: { lat: 100, lng: 100 },
      storeLocation: { lat: 100, lng: 100 },
      deliveryPolicy: store[Store.DeliveryPolicy],
    });

    const deliveryFeeError = createOperation(11100);

    expect(dispatched).toContainEqual(setUserOperationFailure(deliveryFeeError));
    expect(dispatched).toContainEqual(actions.orderAddClientInformationFailure(deliveryFeeError));
    expect(Router.push).toHaveBeenCalledTimes(0);
  });

  it('catches errors thrown inside', async () => {
    (Logic as IGenericObject<any>).calculateDeliveryFee = jest.fn().mockImplementation(() => {
      throw error;
    });

    (Logic as IGenericObject<any>).toLatLng = jest.fn();

    const argument = makeSagaArgument(client);

    const dispatched = await recordSaga(state, addClientInformation, argument);

    expect(Logic.calculateDeliveryFee).toHaveBeenCalledWith({
      userLocation: { lat: 100, lng: 100 },
      storeLocation: { lat: 100, lng: 100 },
      deliveryPolicy: store[Store.DeliveryPolicy],
    });

    expect(dispatched).toContainEqual(actions.orderAddClientInformationFailure(error));
    expect(dispatched).toContainEqual(setUserOperationFailure(error));
    expect(Router.push).toHaveBeenCalledTimes(0);
  });
});
