import { serverGet } from '../utils';
import { TGetMochiNight, TGetStore } from './store-protocols';

export const GetStore: TGetStore = id => serverGet(`store/${id}`);

export const GetMochiNight: TGetMochiNight = headers => serverGet(`mochiNight/`, {}, headers);
