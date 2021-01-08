import { CartItem, OrderStatus, Product, ProductStore, User } from '@ilovemochi/enums';
import { IOrder } from '@ilovemochi/types';
import { ICartItem } from '@ilovemochi/types/lib/orders';
import DineroFactory from 'dinero.js';
import { applySpec, map, omit, prop } from 'ramda';

import { CreateOrderObject } from './order.types';

export const normalizeCartItems = map(
  applySpec<ICartItem<DineroFactory.DineroObject>>({
    [Product.Id]: prop(Product.Id),
    [Product.Type]: prop(Product.Type),
    [Product.Container]: prop(Product.Container),
    [Product.Name]: prop(Product.Name),
    [Product.Category]: prop(Product.Category),
    [Product.SubCategory]: prop(Product.SubCategory),
    [Product.Image]: prop(Product.Image),
    [Product.Tags]: prop(Product.Tags),
    [ProductStore.DiscountPrice]: prop(ProductStore.DiscountPrice),
    [Product.Size]: prop(Product.Size),
    [ProductStore.Price]: prop(ProductStore.Price),
    [CartItem.Quantity]: prop(CartItem.Quantity),
    [CartItem.Money]: prop(CartItem.Money),
    store: prop('store'),
  })
);

const filterUser = omit([
  User.Roles,
  User.Gender,
  User.BirthDate,
  User.CreatedAt,
  User.UpdatedAt,
  User.ResetPasswordExpires,
  User.ResetPasswordToken,
]);

export const createOrderObject: CreateOrderObject = ({
  paymentType,
  paymentMethod,
  user,
  clientOrderInformation,
  cartItems,
  cartTotalCost,
  deliveryFee,
  store,
}): Omit<IOrder, 'createdAt'> => ({
  paymentType,
  paymentMethod,
  products: normalizeCartItems(cartItems),
  cartTotalCost,
  client: {
    ...filterUser(user),
    ...clientOrderInformation,
    id: user[User.Id],
  },
  deliveryFee,
  store,
  status: OrderStatus.Pending,
});
