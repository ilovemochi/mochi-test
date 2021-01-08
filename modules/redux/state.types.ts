import { I18nError, ICartItem, IGenericObject, IOrder, IStore, IUser } from '@ilovemochi/types';
import DineroFactory from 'dinero.js';

import { CartSelectorEnum } from './cart/cart.enum';
import { OperationServiceStateKeys } from './operation-service/operation-service.enum';
import { OrderSelectorEnum } from './order/order.enum';
import { ClientOrderInformation } from './order/order.types';
import { StoresSelectorEnum } from './stores/stores.enum';
import { AuthModalEnum, UserEnum } from './user/user.enum';

export interface OperationServiceMessage {
  id: string;
  message: I18nError;
  isError: boolean;
}

export type CartItemDineroObject = ICartItem<DineroFactory.DineroObject>;

export interface OrderState {
  [OrderSelectorEnum.Loading]: boolean;
  [OrderSelectorEnum.Data]: IOrder | null;
  [OrderSelectorEnum.Error]: boolean;
  [OrderSelectorEnum.DeliveryFee]: null | DineroFactory.DineroObject;
  [OrderSelectorEnum.Client]: null | ClientOrderInformation;
}

export interface StoresState {
  [StoresSelectorEnum.Data]: IGenericObject<IStore>;
  [StoresSelectorEnum.Error]: boolean;
}

export interface UserState {
  [UserEnum.Loading]: boolean;
  [UserEnum.Data]: null | IUser;
  [UserEnum.Error]: boolean;
  [UserEnum.HasLocation]: boolean;
  [UserEnum.AuthModal]: null | AuthModalEnum;
  [UserEnum.AccessToken]: null | string;
}

export interface CartState {
  [CartSelectorEnum.Visible]: boolean;
  [CartSelectorEnum.CartItems]: ReadonlyArray<CartItemDineroObject>;
  [CartSelectorEnum.StoreName]: string | null;
  [CartSelectorEnum.StoreId]: string | null;
}

export interface OperationServiceState {
  [OperationServiceStateKeys.Messages]: ReadonlyArray<OperationServiceMessage>;
}

export interface State {
  [UserEnum.User]: UserState;
  [CartSelectorEnum.Cart]: CartState;
  [OrderSelectorEnum.Order]: OrderState;
  [StoresSelectorEnum.Stores]: StoresState;
  [OperationServiceStateKeys.OperationService]: OperationServiceState;
}
