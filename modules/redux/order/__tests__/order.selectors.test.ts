import { mockStoreOrderState } from '@test-utils';
import DineroFactory from 'dinero.js';

import { OrderSelectorEnum } from '../order.enum';
import * as selectors from '../order.selectors';

const error = new Error('something went wrong');

describe('Order Selectors', () => {
  test('Get Client Order Information', () => {
    const client = 'any_client';
    const state = mockStoreOrderState({
      [OrderSelectorEnum.Client]: client,
    }) as any;
    expect(selectors.getClientOrderInformation(state)).toEqual(client);
  });

  test('Get Current Order', () => {
    const order = 'any_order';
    const state = mockStoreOrderState({
      [OrderSelectorEnum.Data]: order,
    });
    expect(selectors.getCurrentOrder(state as any)).toEqual(order);
  });

  test('Get Order Loading', () => {
    const loading = true;
    const state = mockStoreOrderState({
      [OrderSelectorEnum.Loading]: loading,
    }) as any;
    expect(selectors.getOrderLoading(state)).toBe(loading);
  });

  test('Get Order Error', () => {
    const state = mockStoreOrderState({
      [OrderSelectorEnum.Error]: error,
    }) as any;
    expect(selectors.getOrderError(state)).toEqual(error);
  });

  test('Get Order Delivery Fee transforms a dinero object to dinero', () => {
    const fee = DineroFactory({ amount: 200, currency: 'EUR' }).toObject();
    const state = mockStoreOrderState({
      [OrderSelectorEnum.DeliveryFee]: fee,
    }) as any;
    expect(selectors.getOrderDeliveryFee(state)?.getAmount()).toBe(200);
  });

  test('Get Order Delivery Fee returns null if fee is null', () => {
    const state = mockStoreOrderState({
      [OrderSelectorEnum.DeliveryFee]: null,
    }) as any;
    expect(selectors.getOrderDeliveryFee(state)).toBeNull();
  });
});
