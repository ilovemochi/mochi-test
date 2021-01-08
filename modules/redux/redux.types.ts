// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { SagaMiddleware } from '@redux-saga/core/types';
import { HYDRATE } from 'next-redux-wrapper';
import { Action, AnyAction, Dispatch, Store as ReduxStore } from 'redux';

import { State } from './state.types';

/**
 * Interfaces regarding state
 */

export interface HydrateAction {
  type: typeof HYDRATE;
  payload: State;
}

type SagaTask = (dispatch: Dispatch) => void;

export interface SagaStore extends ReduxStore<State> {
  sagaTask: SagaMiddleware<object> | null;
  runSaga: () => void;
  stopSaga: () => Promise<void>;
  runSagaTask: (task: SagaTask) => Promise<void>;
}

export interface ILocationState {
  street: string | null;
  lat: number | null;
  lng: number | null;
}

export type HydrateReducer<S, A, R> = (state: S, action: A) => R;

export type Reducer<S, A> = (state: S, action: A) => S;

export type Handlers<S, A extends Action = AnyAction> = [
  A['type'],
  Reducer<S, A extends Action<string> ? A : never>
];
