import { I18nError } from '@ilovemochi/types';
import {
  __,
  always,
  append,
  applySpec,
  compose,
  cond,
  curry,
  equals,
  flip,
  identity,
  isNil,
  lensIndex,
  map,
  o,
  over,
  prepend,
  reject,
  T,
  type,
  whereEq,
} from 'ramda';
import { Action, AnyAction } from 'redux';

import { Handlers } from './redux.types';

export const createOperation = (code: number, value?: string): I18nError => ({
  code,
  value: value || null,
});

const isUndefined = o(equals('Undefined'), type);

const overHead = over(lensIndex(0)) as any;

const toActionTypeEquals = (x: string) => flip(whereEq({ type: x }));

export function createReducer<S, A extends Action = AnyAction>(
  initialState: S,
  handlers: Handlers<S, A>[]
) {
  return compose(
    cond,
    prepend([isUndefined, always(initialState)]) as any,
    append([T, identity]),
    map(overHead(toActionTypeEquals))
  )(handlers);
}

const actionFactory = curry((x: string, getPayload: Function) =>
  compose(
    reject(isNil),
    applySpec({
      type: always(x),
      payload: getPayload,
    })
  )
);

export const createAction = actionFactory(__, identity) as any;

export const createConstantAction = actionFactory(__, always(null)) as any;
