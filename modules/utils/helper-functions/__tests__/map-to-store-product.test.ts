import { Product, ProductStore } from '@ilovemochi/enums';

import { mapToStoreProduct } from '../index';

const makeSut = () => ({ sut: mapToStoreProduct });

describe(mapToStoreProduct.name, () => {
  it('return mapToStoreProduct', () => {
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

    const result = sut('any_id')([product])[0];
    expect(result.available).toBe(true);
    expect(result.currency).toBe('AOA');
    expect(result.discountPrice).toBe(null);
    expect(result.fullName).toBe('product fullname');
    expect(result.id).toBe('product_id');
    expect(result.price).toBe(1000);
    expect(result.storeId).toBe('any_id');
  });
});
