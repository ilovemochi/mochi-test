import { curryN, head, mergeRight, o, prop } from 'ramda';

import { createOrderFailure } from '../../order/order.actions';
import { OperationServiceMessage, OperationServiceState } from '../../state.types';
import { setStoreServerOperationError } from '../../stores/stores.actions';
import { setUserOperationFailure } from '../../user/user.actions';
import * as actions from '../operation-service.actions';
import { addSuccessMessage } from '../operation-service.actions';
import { OperationServiceStateKeys } from '../operation-service.enum';
import reducer, { INITIAL_STATE as state } from '../operation-service.reducer';

const makeOperationServiceMessage = () => ({
  id: 'any_id',
  message: {
    code: 10000,
    value: null,
  },
  isError: true,
});

const error = {
  message: {
    code: 10000,
    value: null,
  },
};

const extractData = o<
  OperationServiceState,
  OperationServiceState['messages'],
  OperationServiceMessage
>(head, prop('messages'));

const reducerWithUserState = curryN(2, reducer)(state);
const newState = mergeRight(state);

describe('order reducer', () => {
  test(`removes a message from ${OperationServiceStateKeys.Messages} when the ${actions.removeMessage.name} is dispatched`, () => {
    const id = 'any_id';
    const result = reducer(
      {
        [OperationServiceStateKeys.Messages]: [makeOperationServiceMessage()],
      },
      actions.removeMessage(id)
    );
    expect(result).toEqual(newState({ [OperationServiceStateKeys.Messages]: [] }));
  });

  test(`adds a success message to ${OperationServiceStateKeys.Messages} when the ${actions.addSuccessMessage.name} is dispatched`, () => {
    const result = reducerWithUserState(addSuccessMessage(error.message));
    const { message, isError } = extractData(result);
    expect(message).toEqual({
      code: 10000,
      value: null,
    });
    expect(isError).toBe(false);
  });

  test(`adds an error message to ${OperationServiceStateKeys.Messages} when the ${setUserOperationFailure.name} is dispatched`, () => {
    const result = reducerWithUserState(setUserOperationFailure(error.message));
    const { message, isError } = extractData(result);
    expect(message).toEqual({
      code: 10000,
      value: null,
    });
    expect(isError).toBe(true);
  });

  test(`adds an error message to ${OperationServiceStateKeys.Messages} when the ${setStoreServerOperationError.name} is dispatched`, () => {
    const result = reducerWithUserState(setStoreServerOperationError(error.message));
    const { message, isError } = result[OperationServiceStateKeys.Messages][0];
    expect(message).toEqual({
      code: 10000,
      value: null,
    });
    expect(isError).toBe(true);
  });

  test(`adds an error message to ${OperationServiceStateKeys.Messages} when the ${createOrderFailure.name} is dispatched`, () => {
    const result = reducerWithUserState(createOrderFailure(error.message));
    const { message, isError } = extractData(result);
    expect(message).toEqual({
      code: 10000,
      value: null,
    });
    expect(isError).toBe(true);
  });
});
