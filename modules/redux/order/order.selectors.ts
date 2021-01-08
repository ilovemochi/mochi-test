import { convertObjectToDinero } from '@utils/helper-functions';
import DineroFactory from 'dinero.js';
import memoize from 'fast-memoize';
import { identity, ifElse, isNil, o, pathOr } from 'ramda';

import { OrderState } from '../state.types';
import { OrderSelectorEnum } from './order.enum';
import { INITIAL_STATE } from './order.reducer';

export const getClientOrderInformation = memoize(
  pathOr<OrderState[OrderSelectorEnum.Client]>(INITIAL_STATE[OrderSelectorEnum.Client], [
    OrderSelectorEnum.Order,
    OrderSelectorEnum.Client,
  ])
);

export const getCurrentOrder = memoize(
  pathOr<OrderState[OrderSelectorEnum.Data]>(INITIAL_STATE[OrderSelectorEnum.Data], [
    OrderSelectorEnum.Order,
    OrderSelectorEnum.Data,
  ])
);

export const getOrderLoading = memoize(
  pathOr<OrderState[OrderSelectorEnum.Loading]>(INITIAL_STATE[OrderSelectorEnum.Loading], [
    OrderSelectorEnum.Order,
    OrderSelectorEnum.Loading,
  ])
);

export const getOrderError = memoize(
  pathOr<OrderState[OrderSelectorEnum.Error]>(INITIAL_STATE[OrderSelectorEnum.Error], [
    OrderSelectorEnum.Order,
    OrderSelectorEnum.Error,
  ])
);

export const getOrderDeliveryFee = memoize(
  o<OrderState, OrderState[OrderSelectorEnum.DeliveryFee], null | DineroFactory.Dinero>(
    ifElse(isNil, identity, convertObjectToDinero),
    pathOr<OrderState[OrderSelectorEnum.DeliveryFee]>(
      INITIAL_STATE[OrderSelectorEnum.DeliveryFee],
      [OrderSelectorEnum.Order, OrderSelectorEnum.DeliveryFee]
    )
  )
);
