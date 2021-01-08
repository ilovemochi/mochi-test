import { PaymentType, User } from '@ilovemochi/enums';
import { I18nError, ILocation, IOrder, IUser } from '@ilovemochi/types';
import { PaymentMethod } from '@stripe/stripe-js';
import DineroFactory from 'dinero.js';

import { ClearAllErrorsReturn } from '../error/error.types';
import { OrderActionTypes } from './order.enum';

export interface ClientOrderInformation {
  [User.Name]: string;
  [User.Email]: string;
  [User.Location]: ILocation;
  [User.WhatsApp];
  [User.Phone]: string;
}

export interface OrderPaymentInformation {
  type: PaymentType;
  method: PaymentMethod | null;
  change?: number;
}

// ***** Interfaces for the actions Start *****

export interface OrderAddClientInformationStartReturn {
  type: typeof OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START;
  payload: ClientOrderInformation;
}
export interface IOrderAddClientInformationStart {
  (clientOrderInformation: ClientOrderInformation): OrderAddClientInformationStartReturn;
}

export interface OrderAddClientInformationSuccessReturn {
  type: typeof OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_SUCCESS;
  payload: ClientOrderInformation;
}

export interface IOrderAddClientInformationSuccess {
  (clientOrderInformation: ClientOrderInformation): OrderAddClientInformationSuccessReturn;
}

export interface OrderAddClientInformationFailureReturn {
  type: typeof OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_FAILURE;
  payload: I18nError;
}

export interface IOrderAddClientInformationFailure {
  (error: I18nError): OrderAddClientInformationFailureReturn;
}

export interface CreateOrderStartReturn {
  type: typeof OrderActionTypes.ORDER_CREATE_START;
  payload: OrderPaymentInformation;
}

export interface ICreateOrderStart {
  (paymentInformation: OrderPaymentInformation): CreateOrderStartReturn;
}

export interface CreateOrderSuccessReturn {
  type: typeof OrderActionTypes.ORDER_CREATE_SUCCESS;
  payload: IOrder;
}

export interface ICreateOrderSuccess {
  (successfulOrder: IOrder): CreateOrderSuccessReturn;
}

export interface CreateOrderFailureReturn {
  type: typeof OrderActionTypes.ORDER_CREATE_FAILURE;
  payload: I18nError;
}

export interface ICreateOrderFailure {
  (payload: I18nError): CreateOrderFailureReturn;
}

export interface OrderAddDeliveryFeeReturn {
  type: typeof OrderActionTypes.ORDER_ADD_DELIVERY_FEE;
  payload: DineroFactory.Dinero;
}

export interface OrderAddDeliveryFee {
  (deliveryFee: DineroFactory.DineroObject): OrderAddDeliveryFeeReturn;
}

// ***** Interfaces for the actions End *****

export type OrderActions =
  | OrderAddClientInformationStartReturn
  | OrderAddClientInformationSuccessReturn
  | OrderAddClientInformationFailureReturn
  | CreateOrderStartReturn
  | CreateOrderSuccessReturn
  | CreateOrderFailureReturn
  | ClearAllErrorsReturn
  | OrderAddDeliveryFeeReturn;

// ** Helpers

interface CreateOrderArgument {
  paymentType: OrderPaymentInformation['type'];
  paymentMethod: any;
  user: IUser;
  clientOrderInformation: ClientOrderInformation;
  cartItems: IOrder['products'];
  cartTotalCost: IOrder['cartTotalCost'];
  deliveryFee: IOrder['deliveryFee'];
  store: IOrder['store'];
}

export type CreateOrderObject = (data: CreateOrderArgument) => Omit<IOrder, 'createdAt'>;
