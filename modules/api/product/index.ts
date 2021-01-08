import { objectToQuery, serverGet } from '../utils';
import { TGetProducts } from './product-protocols';

// eslint-disable-next-line import/prefer-default-export
export const GetProducts: TGetProducts = query => serverGet(`product${objectToQuery(query)}`);
