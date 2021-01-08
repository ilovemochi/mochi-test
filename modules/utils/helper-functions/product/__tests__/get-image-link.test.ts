import { getProductsImageUrl } from '@api/utils';
import { IProductImage } from '@ilovemochi/types';

import { getImageLink } from '../index';

jest.mock('@api/utils', () => ({
  getProductsImageUrl: jest.fn().mockReturnValue('any_image_url'),
}));

const makeSut = () => ({ sut: getImageLink });

describe(getImageLink.name, () => {
  const image: IProductImage = { small: 'small', medium: 'medium' };

  it('calls the getProductsImageUrl and returns a properly formatted object', () => {
    const { sut } = makeSut();
    const result = sut(image);
    expect(result).toEqual({ small: 'any_image_url', medium: 'any_image_url' });
    expect(getProductsImageUrl).toHaveBeenCalledTimes(2);
    expect(getProductsImageUrl).toHaveBeenCalledWith('small');
    expect(getProductsImageUrl).toHaveBeenCalledWith('medium');
  });
});
