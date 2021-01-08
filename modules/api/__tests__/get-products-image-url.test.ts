import { getProductsImageUrl } from '../utils';

const makeSut = () => ({ sut: getProductsImageUrl });

describe(getProductsImageUrl.name, () => {
  it('attaches the path to the process.env.NEXT_PUBLIC_S3_BUCKET', () => {
    const { sut } = makeSut();
    const result = sut('hello-world.jpg');
    expect(result).toBe(`S3_BUCKET/hello-world.jpg`);
  });
});
