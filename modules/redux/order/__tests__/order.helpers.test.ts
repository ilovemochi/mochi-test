import {
  CartItem,
  OrderStatus,
  PaymentType,
  Product,
  ProductStore,
  Store,
} from '@ilovemochi/enums';
import {
  MakeTestCartItem,
  MakeTestClientOrderInformation,
  MakeTestStore,
  MakeTestStripePaymentMethod,
  MakeTestUser,
} from '@ilovemochi/test-suite';
import DineroFactory from 'dinero.js';

import { createOrderObject, normalizeCartItems } from '../helper-function';

describe('Helper Functions', () => {
  test('Normalize Cart Items', () => {
    const cartItem = MakeTestCartItem();
    const cartItems = [{ ...cartItem, avaliable: true, updatedAt: 'any date' }];

    expect(normalizeCartItems(cartItems)[0]).toEqual({
      [Product.Id]: cartItem.id,
      [Product.Type]: cartItem.type,
      [Product.Container]: cartItem.container,
      [Product.Name]: cartItem.name,
      [Product.Category]: cartItem.category,
      [Product.SubCategory]: cartItem.subCategory,
      [Product.Image]: cartItem.image,
      [Product.Tags]: cartItem.tags,
      [ProductStore.DiscountPrice]: cartItem.discountPrice,
      [Product.Size]: cartItem.size,
      [ProductStore.Price]: cartItem.price,
      [CartItem.Quantity]: cartItem.quantity,
      [CartItem.Money]: cartItem.money,
      store: cartItem.store,
    });
  });

  test('Create Order Object', () => {
    const user = MakeTestUser() as any;
    const client = MakeTestClientOrderInformation();
    const cartItem = MakeTestCartItem();
    const store = MakeTestStore();
    const fee = DineroFactory({ amount: 2000, currency: 'EUR' });
    const cartItems = [cartItem];

    const data = {
      clientOrderInformation: client,
      cartTotalCost: DineroFactory({ amount: cartItem.price, currency: 'EUR' }).toObject(),
      cartItems,
      user,
      paymentType: PaymentType.CreditCard,
      paymentMethod: MakeTestStripePaymentMethod() as any,
      deliveryFee: fee.toObject(),
      store: {
        [Store.Id]: store[Store.Id],
        [Store.Name]: store[Store.Name],
        [Store.Location]: store[Store.Location],
      },
    };

    // eslint-disable-next-line no-unused-vars
    const {
      createdAt,
      roles,
      gender,
      birthDate,
      updatedAt,
      resetPasswordExpires,
      resetPasswordToken,
      ...normalizedUser
    } = user;

    const result = createOrderObject(data);
    expect(result).toMatchObject({
      paymentType: data.paymentType,
      paymentMethod: data.paymentMethod,
      products: normalizeCartItems(data.cartItems),
      cartTotalCost: data.cartTotalCost,
      client: {
        ...normalizedUser,
        ...data.clientOrderInformation,
        id: user.id,
      },
      status: OrderStatus.Pending,
      deliveryFee: data.deliveryFee,
      store: data.store,
    });
  });
});
