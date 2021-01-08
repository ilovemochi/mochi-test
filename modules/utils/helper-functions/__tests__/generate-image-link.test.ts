import { generateImageLink } from '../index';

jest.mock('@api', () => ({
  getProductsImageUrl: jest
    .fn()
    .mockImplementation((image: string) => `https://mochi-image-bucket.com/${image}`),
}));

const makeSut = () => ({ sut: generateImageLink });

describe('generateImageLink', () => {
  it('return bucket link to image', () => {
    const { sut } = makeSut();
    const imageLink = sut({
      small: 'image400x400.png',
      medium: 'image600x600.png',
    });

    expect(imageLink).toEqual({
      small: 'https://mochi-image-bucket.com/image400x400.png',
      medium: 'https://mochi-image-bucket.com/image600x600.png',
    });
  });
});
