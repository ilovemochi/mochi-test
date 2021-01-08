import { getProductsImageUrl } from '@api/utils';
import { Images, ProductStore, Size } from '@ilovemochi/enums';
import { IProductImage, IProductSize } from '@ilovemochi/types';
import DineroFactory from 'dinero.js';

import { GetMoneyData } from './helper-products.types';

export const formatSize = (size: IProductSize) => `${size[Size.Value]} ${size[Size.Type]}`;

export const getImageLink = (image: IProductImage) => ({
  small: getProductsImageUrl(image[Images.Small]),
  medium: getProductsImageUrl(image[Images.Medium]),
});

export const getMoney = (data: GetMoneyData) =>
  DineroFactory({
    amount: data[ProductStore.Price],
    currency: data[ProductStore.Currency],
    precision: 2,
  });
