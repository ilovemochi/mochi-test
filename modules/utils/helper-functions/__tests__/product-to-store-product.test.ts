import { Product, ProductStore } from '@ilovemochi/enums';

import { productToStoreProduct } from '../index';

const makeSut = () => ({ sut: productToStoreProduct });

describe('productToStoreProduct', () => {
  it('creates a store product from a product', () => {
    const { sut } = makeSut();

    const product: any = {
      [Product.Id]: 'product_id',
      [Product.FullName]: 'product fullname',
      [Product.Name]: 'product',
      [Product.Stores]: [
        {
          [ProductStore.StoreId]: 'any_id',
          [ProductStore.Price]: 1000,
          [ProductStore.Currency]: 'AOA',
          [ProductStore.DiscountPrice]: null,
          [ProductStore.Available]: true,
        },
      ],
    };
    const result = sut('any_id')(product);

    expect(result.stores).toBeUndefined();
    expect(result.storeId).toBe('any_id');
    expect(result.price).toBe(1000);
    expect(result.discountPrice).toBeNull();
    expect(result.available).toBe(true);
    expect(result.currency).toBe('AOA');
  });
});
