import {
  always,
  append,
  applySpec,
  compose,
  equals,
  F,
  flip,
  identity,
  not,
  o,
  prop,
  T,
  useWith,
} from 'ramda';
import { AnyAction } from 'redux';
import { v4 } from 'uuid';

import { OperationServiceState } from '../state.types';
import { OperationServiceStateKeys } from './operation-service.enum';

const createMessage = (x: Function) =>
  applySpec({
    id: o(v4, always(undefined)),
    message: identity,
    isError: x,
  });

const createErrorMessage = createMessage(T);

const createSuccessMessage = createMessage(F);

export const addServerError = applySpec({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  [OperationServiceStateKeys.Messages]: useWith(flip(append), [
    identity,
    compose(createErrorMessage, prop('payload')),
  ]),
});

export const addSuccessMessage = applySpec({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  [OperationServiceStateKeys.Messages]: useWith(flip(append), [
    identity,
    compose(createSuccessMessage, prop('payload')),
  ]),
});

export const removeMessage = (state: OperationServiceState, action: AnyAction) => ({
  [OperationServiceStateKeys.Messages]: state[OperationServiceStateKeys.Messages].filter(
    compose(not, equals(action.payload), prop('id'))
  ),
});
