import { ClientAPIResponse, IGenericObject, IProduct, IStore } from '@ilovemochi/types';

export type TGetStore = (id: string) => Promise<ClientAPIResponse<IStore>>;

interface GetMochiNightResponse {
  store: IStore;
  products: { [category: string]: ReadonlyArray<IProduct> };
}

export type TGetMochiNight = (
  headers: IGenericObject<string>
) => Promise<ClientAPIResponse<GetMochiNightResponse>>;
