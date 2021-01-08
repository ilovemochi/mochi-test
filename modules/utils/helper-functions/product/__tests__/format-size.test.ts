import { IProductSize } from '@ilovemochi/types';

import { formatSize } from '../index';

const makeSut = () => ({ sut: formatSize });

describe(formatSize.name, () => {
  const size: IProductSize = { value: 10, type: 'L' };
  it('it returns the size format ', () => {
    const { sut } = makeSut();
    const result = sut(size);
    expect(result).toBe('10 L');
  });
});
