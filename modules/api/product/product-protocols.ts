import { ClientAPIResponse, IGenericObject, IProduct, TotalCountResponse } from '@ilovemochi/types';

export type TGetProducts = (
  query: IGenericObject<string | number>
) => Promise<ClientAPIResponse<TotalCountResponse<ReadonlyArray<IProduct> | []>>>;
