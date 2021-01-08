import * as API from '@api';
import { TPostPay } from '@api/order/order-protocols';
import Route from '@constants/routes';
import { Order, Store } from '@ilovemochi/enums';
import { calculateDeliveryFee } from '@ilovemochi/logic';
import { IStore } from '@ilovemochi/types';
import { getLatLngCoordinates } from '@utils/helper-functions';
import DineroFactory from 'dinero.js';
import Router from 'next/router';
import { always, assoc, identity, ifElse, o } from 'ramda';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { clearCartStart, closeCart } from '../cart/cart.actions';
import { getCartItemsDineroObject, getCartStoreId, getTotalCartCost } from '../cart/cart.selectors';
import { addSuccessMessage } from '../operation-service/operation-service.actions';
import { createOperation } from '../redux-helpers';
import { CartState } from '../state.types';
import { getStore } from '../stores/stores.selectors';
import { setAccessToken, setUserOperationFailure } from '../user/user.actions';
import { getUserDataAccessToken } from '../user/user.selectors';
import { createOrderObject } from './helper-function';
import {
  createOrderFailure,
  createOrderSuccess,
  orderAddClientInformationFailure,
  orderAddClientInformationSuccess,
  orderAddDeliveryFee,
} from './order.actions';
import { OrderActionTypes } from './order.enum';
import { getClientOrderInformation, getOrderDeliveryFee } from './order.selectors';
import {
  ClientOrderInformation,
  CreateOrderStartReturn,
  OrderAddClientInformationStartReturn,
} from './order.types';

const selectStoreFromId = o(select, getStore);

export function* createOrder(data: CreateOrderStartReturn) {
  try {
    const { user, accessToken } = yield select(getUserDataAccessToken);
    const clientOrderInformation: ClientOrderInformation = yield select(getClientOrderInformation);
    const cartItems: CartState['cartItems'] = yield select(getCartItemsDineroObject);
    const cartTotalCost: DineroFactory.Dinero = yield select(getTotalCartCost);
    const deliveryFee: DineroFactory.Dinero = yield select(getOrderDeliveryFee);
    const storeId: string = yield select(getCartStoreId);
    const store: IStore = yield selectStoreFromId(storeId);
    const storeLocation = store[Store.Location];
    const orderStore = {
      id: storeId,
      location: storeLocation,
      name: store[Store.Name],
    };

    const orderPayload = createOrderObject({
      clientOrderInformation,
      cartTotalCost: cartTotalCost.toObject(),
      cartItems,
      user,
      paymentType: data.payload.type,
      paymentMethod: data.payload.method,
      deliveryFee: deliveryFee.toObject(),
      store: orderStore,
    });

    const addOptionalChange = ifElse(
      always(!!data.payload.change),
      assoc(
        Order.Change,
        DineroFactory({
          amount: data.payload.change || 0,
          currency: store[Store.Currency],
          precision: 2,
        }).toObject()
      ),
      identity
    );

    const { data: order, authData } = yield call<TPostPay>(API.PostPay, {
      payload: addOptionalChange(orderPayload),
      accessToken: accessToken || '',
    });

    if (authData) {
      yield put(setAccessToken(authData.accessToken));
    }

    yield put(createOrderSuccess(order));
    yield put(addSuccessMessage(createOperation(11206)));
    yield put(closeCart());
    yield Router.push(Route.LastOrder);
    yield put(clearCartStart());
  } catch (error) {
    yield put(createOrderFailure(error));
  }
}

export function* addClientInformation(data: OrderAddClientInformationStartReturn) {
  try {
    const client = data.payload;
    const storeId: string = yield select(getCartStoreId);
    const store: IStore = yield selectStoreFromId(storeId);

    const deliveryPolicy = store[Store.DeliveryPolicy];
    const storeLocation = getLatLngCoordinates(store);
    const userLocation = getLatLngCoordinates(client);

    const deliveryFeeTax = calculateDeliveryFee({ deliveryPolicy, storeLocation, userLocation });

    if (deliveryFeeTax === -1) {
      const error = createOperation(11100);
      yield put(setUserOperationFailure(error));
      yield put(orderAddClientInformationFailure(error));
    } else {
      yield put(orderAddClientInformationSuccess(data.payload));
      yield put(
        orderAddDeliveryFee(
          DineroFactory({
            amount: deliveryFeeTax,
            currency: store[Store.Currency],
            precision: 2,
          }).toObject()
        )
      );
      yield put(addSuccessMessage(createOperation(11207)));
      yield Router.push(Route.CheckoutCart);
    }
  } catch (error) {
    yield put(setUserOperationFailure(error));
    yield put(orderAddClientInformationFailure(error));
  }
}

function* watchOrderCreateStart() {
  yield takeLatest(OrderActionTypes.ORDER_CREATE_START, createOrder);
}

function* watchOrderAddClientInformationStart() {
  yield takeLatest(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START, addClientInformation);
}

function* orderSagas() {
  yield all([call(watchOrderCreateStart), call(watchOrderAddClientInformationStart)]);
}

export default orderSagas;
