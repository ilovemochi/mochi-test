import { hasDuplicates } from '../../../utils/helper-functions';
import { OrderActionTypes } from '../order.enum';

const actionsArray = Object.values(OrderActionTypes);

describe('Order Action Types', () => {
  test(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START, () => {
    expect(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_START).toBe(
      'ORDER_ADD_CLIENT_INFORMATION_START'
    );
  });

  test(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_SUCCESS, () => {
    expect(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_SUCCESS).toBe(
      'ORDER_ADD_CLIENT_INFORMATION_SUCCESS'
    );
  });

  test(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_FAILURE, () => {
    expect(OrderActionTypes.ORDER_ADD_CLIENT_INFORMATION_FAILURE).toBe(
      'ORDER_ADD_CLIENT_INFORMATION_FAILURE'
    );
  });

  test(OrderActionTypes.ORDER_ADD_DELIVERY_FEE, () => {
    expect(OrderActionTypes.ORDER_ADD_DELIVERY_FEE).toBe('ORDER_ADD_DELIVERY_FEE');
  });

  test(OrderActionTypes.ORDER_CREATE_FAILURE, () => {
    expect(OrderActionTypes.ORDER_CREATE_FAILURE).toBe('ORDER_CREATE_FAILURE');
  });

  test(OrderActionTypes.ORDER_CREATE_START, () => {
    expect(OrderActionTypes.ORDER_CREATE_START).toBe('ORDER_CREATE_START');
  });

  test(OrderActionTypes.ORDER_CREATE_SUCCESS, () => {
    expect(OrderActionTypes.ORDER_CREATE_SUCCESS).toBe('ORDER_CREATE_SUCCESS');
  });

  test('length of the test action types array', () => {
    expect(actionsArray.length).toBe(7);
    expect(hasDuplicates(actionsArray)).toBe(false);
  });
});
