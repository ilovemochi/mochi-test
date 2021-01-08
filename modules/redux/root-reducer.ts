import { combineReducers } from 'redux';

import { CartSelectorEnum } from './cart/cart.enum';
import cartReducer from './cart/cart.reducer';
import { OperationServiceStateKeys } from './operation-service/operation-service.enum';
import operationServiceReducer from './operation-service/operation-service.reducer';
import { OrderSelectorEnum } from './order/order.enum';
import orderReducer from './order/order.reducer';
import { StoresSelectorEnum } from './stores/stores.enum';
import storesReducer from './stores/stores.reducer';
import { UserEnum } from './user/user.enum';
import userReducer from './user/user.reducer';

export default combineReducers({
  [UserEnum.User]: userReducer,
  [StoresSelectorEnum.Stores]: storesReducer,
  [CartSelectorEnum.Cart]: cartReducer,
  [OrderSelectorEnum.Order]: orderReducer,
  [OperationServiceStateKeys.OperationService]: operationServiceReducer,
});
