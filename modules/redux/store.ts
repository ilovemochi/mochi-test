import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import { isDevelopment } from '../utils/helper-functions';
import { SagaStore } from './redux.types';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import { State } from './state.types';

export const makeStore: MakeStore<State> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware: Middleware[] = [sagaMiddleware];

  if (isDevelopment) {
    middleware.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middleware)) as SagaStore;

  store.runSaga = () => {
    if (store.sagaTask) return;
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    if (!store.sagaTask) return;
    store.dispatch(END);
    await store.sagaTask.toPromise();

    store.sagaTask = null;
  };

  store.runSagaTask = async task => {
    store.runSaga!();
    await task(store.dispatch);

    if (!process.browser) await store.stopSaga!();
  };

  store.runSaga();

  return store;
};

export const wrapper = createWrapper<State>(makeStore, {
  debug: isDevelopment,
});
