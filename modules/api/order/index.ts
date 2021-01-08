import { makeAuthorizationHeader, serverPost } from '../utils';
import { TPostPay } from './order-protocols';

// eslint-disable-next-line import/prefer-default-export
export const PostPay: TPostPay = ({ payload, accessToken }) =>
  serverPost('order/pay', payload, makeAuthorizationHeader(accessToken));
