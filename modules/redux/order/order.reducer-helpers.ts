import { applySpec, F, identity, mergeLeft, mergeRight, prop, useWith } from 'ramda';
import { AnyAction } from 'redux';

import { Reducer } from '../redux.types';
import { OrderState } from '../state.types';
import { OrderSelectorEnum } from './order.enum';
import { CreateOrderSuccessReturn, OrderAddClientInformationSuccessReturn } from './order.types';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const addClientInformation: Reducer<OrderState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec<OrderAddClientInformationSuccessReturn>({
    [OrderSelectorEnum.Client]: prop('payload'),
    [OrderSelectorEnum.Loading]: F,
    [OrderSelectorEnum.Error]: F,
  }),
]);

export const setOrderLoading: Reducer<OrderState, AnyAction> = mergeLeft({
  [OrderSelectorEnum.Loading]: true,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const addSuccessfulOrder: Reducer<OrderState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec<CreateOrderSuccessReturn>({
    [OrderSelectorEnum.Data]: prop('payload'),
    [OrderSelectorEnum.Loading]: F,
  }),
]);

export const setOrderError: Reducer<OrderState, AnyAction> = mergeLeft({
  [OrderSelectorEnum.Error]: true,
  [OrderSelectorEnum.Loading]: false,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const addDeliveryFee: Reducer<OrderState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec({
    [OrderSelectorEnum.DeliveryFee]: prop('payload'),
  }),
]);
