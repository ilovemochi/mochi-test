import ErrorActionTypes from '../error/error.enum';
import { clearAllErrors } from '../error/error.reducer-helpers';
import { createReducer } from '../redux-helpers';
import { OrderState } from '../state.types';
import { OrderActionTypes, OrderSelectorEnum } from './order.enum';
import {
  addClientInformation,
  addDeliveryFee,
  addSuccessfulOrder,
  setOrderError,
  setOrderLoading,
} from './order.reducer-helpers';
import { OrderActions } from './order.types';

export const INITIAL_STATE = {
  [OrderSelectorEnum.Loading]: false,
  [OrderSelectorEnum.Data]: null,
  [OrderSelectorEnum.Error]: false,
  [OrderSelectorEnum.DeliveryFee]: null,
  [OrderSelectorEnum.Client]: null,
};

const orderReducer = createReducer<OrderState, OrderActions>(INITIAL_STATE, [
  [OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START, setOrderLoading],
  [OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_SUCCESS, addClientInformation],
  [OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_FAILURE, setOrderError],
  [OrderActionTypes.ORDER_CREATE_START, setOrderLoading],
  [OrderActionTypes.ORDER_CREATE_SUCCESS, addSuccessfulOrder],
  [OrderActionTypes.ORDER_CREATE_FAILURE, setOrderError],
  [OrderActionTypes.ORDER_ADD_DELIVERY_FEE, addDeliveryFee],
  [ErrorActionTypes.CLEAR_ERROR, clearAllErrors],
]);

export default orderReducer;
