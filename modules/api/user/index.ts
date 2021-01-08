import { makeAuthorizationHeader, objectToQuery, serverGet, serverPost } from '../utils';
import { TGetUserOrders, TPostUpdateUser } from './user-protocols';

export const PostUpdateUser: TPostUpdateUser = (payload, accessToken) =>
  serverPost('user/updateUser', payload, makeAuthorizationHeader(accessToken));

export const GetUserOrders: TGetUserOrders = (query = {}, headers = {}) =>
  serverGet('user/orders'.concat(objectToQuery(query)), {}, headers);
