import { createAction } from '../redux-helpers';
import { OrderActionTypes } from './order.enum';
import {
  ICreateOrderFailure,
  ICreateOrderStart,
  ICreateOrderSuccess,
  IOrderAddClientInformationFailure,
  IOrderAddClientInformationStart,
  IOrderAddClientInformationSuccess,
  OrderAddDeliveryFee,
} from './order.types';

export const orderAddClientInformationStart: IOrderAddClientInformationStart = createAction(
  OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START
);

export const orderAddClientInformationSuccess: IOrderAddClientInformationSuccess = createAction(
  OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_SUCCESS
);

export const orderAddClientInformationFailure: IOrderAddClientInformationFailure = createAction(
  OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_FAILURE
);

export const createOrderStart: ICreateOrderStart = createAction(
  OrderActionTypes.ORDER_CREATE_START
);

export const createOrderSuccess: ICreateOrderSuccess = createAction(
  OrderActionTypes.ORDER_CREATE_SUCCESS
);

export const createOrderFailure: ICreateOrderFailure = createAction(
  OrderActionTypes.ORDER_CREATE_FAILURE
);

export const orderAddDeliveryFee: OrderAddDeliveryFee = createAction(
  OrderActionTypes.ORDER_ADD_DELIVERY_FEE
);
