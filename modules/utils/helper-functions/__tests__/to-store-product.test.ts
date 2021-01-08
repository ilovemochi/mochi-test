import { Product, ProductStore } from '@ilovemochi/enums';
import { IProductStore } from '@ilovemochi/types';

import { toStoreProduct } from '../index';

const makeSut = () => ({ sut: toStoreProduct });

describe('toStoreProduct', () => {
  it('return store product', () => {
    const { sut } = makeSut();

    const product: any = {
      [Product.Id]: 'product_id',
      [Product.FullName]: 'product full name',
      [Product.Name]: 'product',
    };
    const storeProduct: IProductStore = {
      [ProductStore.StoreId]: 'any_id',
      [ProductStore.Price]: 1000,
      [ProductStore.Currency]: 'AOA',
      [ProductStore.DiscountPrice]: null,
      [ProductStore.Available]: true,
    };

    expect(sut(product, storeProduct)).toEqual({ ...product, ...storeProduct });
  });
});
