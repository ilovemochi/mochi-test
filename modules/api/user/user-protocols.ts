import {
  ClientAPIResponse,
  DBOrder,
  IGenericObject,
  IUser,
  TotalCountResponse,
} from '@ilovemochi/types';

export type TPostUpdateUser = (
  payload: IUser,
  accessToken: string
) => Promise<ClientAPIResponse<IUser>>;

export type TGetUserOrders = (
  query?: IGenericObject<string | number>,
  headers?: IGenericObject<any>
) => Promise<ClientAPIResponse<TotalCountResponse<ReadonlyArray<DBOrder>>, IUser>>;
