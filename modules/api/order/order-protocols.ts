import { ClientAPIResponse, DBOrder, IOrder, IUser } from '@ilovemochi/types';

interface PostPayPayload {
  payload: Omit<IOrder<unknown>, 'createdAt'>;
  accessToken: string;
}

export type TPostPay = (payload: PostPayPayload) => Promise<ClientAPIResponse<DBOrder, IUser>>;
