import { MakeTestStripeOrder } from '@ilovemochi/test-suite';
import DineroFactory from 'dinero.js';
import { curryN, mergeRight } from 'ramda';

import { clearAllErrors } from '../../error/error.action';
import { OrderState } from '../../state.types';
import * as actions from '../order.actions';
import { OrderSelectorEnum } from '../order.enum';
import reducer, { INITIAL_STATE as state } from '../order.reducer';

const error = {
  code: 10000,
  value: null,
};

const reducerWithUserState = curryN(2, reducer)(state);
const newState = mergeRight(state);

const order = MakeTestStripeOrder() as any;

describe('Order Reducer', () => {
  test('Order Add Client Information Start', () => {
    const client = order.client as any;
    const result = reducerWithUserState(actions.orderAddClientInformationStart(client));
    expect(result).toEqual(newState({ [OrderSelectorEnum.Loading]: true }));
  });

  test('Order Add Client Information Success', () => {
    const client = order.client as any;
    const result = reducer(
      { ...state, loading: true, error: true, data: order } as OrderState,
      actions.orderAddClientInformationSuccess(client)
    );
    expect(result).toEqual(newState({ [OrderSelectorEnum.Client]: client, data: order }));
  });

  test('Order Add Client Information Failure', () => {
    const result = reducerWithUserState(actions.orderAddClientInformationFailure(error));
    expect(result).toEqual(newState({ [OrderSelectorEnum.Error]: true }));
  });

  test('Create Order Start', () => {
    const result = reducerWithUserState(actions.createOrderStart(order));
    expect(result).toEqual(newState({ [OrderSelectorEnum.Loading]: true }));
  });

  test('Create Order Success', () => {
    const result = reducerWithUserState(actions.createOrderSuccess(order));
    expect(result).toEqual(newState({ [OrderSelectorEnum.Data]: order }));
  });

  test('Create Order Failure', () => {
    const result = reducerWithUserState(actions.createOrderFailure(error));
    expect(result).toEqual(newState({ [OrderSelectorEnum.Error]: true }));
  });

  test('Order Add Delivery Fee', () => {
    const fee = DineroFactory({ amount: 100, currency: 'EUR' }).toObject() as any;
    const result = reducerWithUserState(actions.orderAddDeliveryFee(fee));
    expect(result).toEqual(newState({ [OrderSelectorEnum.DeliveryFee]: fee }));
  });

  test('Clear All Errors', () => {
    const result = reducer(newState({ [OrderSelectorEnum.Error]: true }), clearAllErrors() as any);
    expect(result).toEqual(newState({ [OrderSelectorEnum.Error]: false }));
  });
});
