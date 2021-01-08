import { MakeTestCartItem } from '@ilovemochi/test-suite';
import { curryN, mergeRight } from 'ramda';

import * as actions from '../cart.actions';
import { CartSelectorEnum } from '../cart.enum';
import reducer, { INITIAL_STATE as state } from '../cart.reducer';

const cartItem = MakeTestCartItem();

const cartReducer = curryN(2, reducer)(state);
const newState = mergeRight(state);

describe('cart reducer', () => {
  test(`sets the ${CartSelectorEnum.Visible} to true with the ${actions.openCart.name} action`, () => {
    const result = cartReducer(actions.openCart());
    expect(result).toEqual(newState({ [CartSelectorEnum.Visible]: true }));
  });

  test(`sets the ${CartSelectorEnum.Visible} to false with the ${actions.closeCart.name} action`, () => {
    const result = cartReducer(actions.closeCart());
    expect(result).toEqual(newState({ [CartSelectorEnum.Visible]: false }));
  });

  test(`adds only items from the same store to ${CartSelectorEnum.CartItems} with the ${actions.addCartItemSuccess.name} action`, () => {
    const data = [cartItem];

    const result = cartReducer(actions.addCartItemSuccess(data));
    expect(result).toEqual(
      newState({
        [CartSelectorEnum.CartItems]: data,
        [CartSelectorEnum.StoreName]: cartItem.store.name,
        [CartSelectorEnum.StoreId]: cartItem.store.id,
      })
    );
  });

  test(`removes the item if its quantity is set at and the id is passed to the action ${actions.removeCartItemSuccess.name}`, () => {
    const data = [cartItem];

    const result = cartReducer(actions.removeCartItemSuccess(data));
    expect(result).toEqual(
      newState({
        [CartSelectorEnum.CartItems]: data,
      })
    );
  });

  test(`clears the entire cart  with the ${actions.clearCartSuccess.name}`, () => {
    const result = cartReducer(actions.clearCartSuccess());
    expect(result).toEqual(
      newState({
        [CartSelectorEnum.CartItems]: [],
      })
    );
  });
});
