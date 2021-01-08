import * as actions from '../order.actions';
import { OrderActionTypes } from '../order.enum';

const error = {
  code: 10000,
  value: null,
};

describe('Order Actions', () => {
  test('Order Add Client Information Start', () => {
    const payload = 'any_client' as any;
    expect(actions.orderAddClientInformationStart(payload)).toEqual({
      type: OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START,
      payload,
    });
  });

  test('Order Add Client Information Success', () => {
    const payload = 'any_client' as any;
    expect(actions.orderAddClientInformationSuccess(payload)).toEqual({
      type: OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_SUCCESS,
      payload,
    });
  });

  test('Order Add Client Information Failure', () => {
    const payload = error;
    expect(actions.orderAddClientInformationFailure(payload)).toEqual({
      type: OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_FAILURE,
      payload,
    });
  });

  test('Create Order Start', () => {
    const payload = 'payment_method' as any;
    expect(actions.createOrderStart(payload)).toEqual({
      type: OrderActionTypes.ORDER_CREATE_START,
      payload,
    });
  });

  test('Create Order Success', () => {
    const payload = 'any_order' as any;
    expect(actions.createOrderSuccess(payload)).toEqual({
      type: OrderActionTypes.ORDER_CREATE_SUCCESS,
      payload,
    });
  });

  test('Create Order Failure', () => {
    const payload = {
      code: 10000,
      value: null,
    };
    expect(actions.createOrderFailure(payload)).toEqual({
      type: OrderActionTypes.ORDER_CREATE_FAILURE,
      payload,
    });
  });

  test('Order Add Delivery Fee', () => {
    const payload = 'delivery_fee' as any;
    expect(actions.orderAddDeliveryFee(payload)).toEqual({
      type: OrderActionTypes.ORDER_ADD_DELIVERY_FEE,
      payload,
    });
  });
});
