import { all, fork } from 'redux-saga/effects';

import cartSagas from './cart/cart.sagas';
import orderSagas from './order/order.sagas';
import userSagas from './user/user.sagas';

function* rootSaga() {
  yield all([fork(userSagas), fork(orderSagas), fork(cartSagas)]);
}

export default rootSaga;
