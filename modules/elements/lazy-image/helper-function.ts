import { IProductImage } from '@ilovemochi/types';
import { concat, converge, curryN, has, join, o, of, prop } from 'ramda';

import { ImageMapKeys, ImageWidth } from './lazy-image.types';

type GenerateDataSrc = (imageMap: IProductImage) => string;

const generateString = curryN(3, (key: ImageMapKeys, width: ImageWidth, imageMap: IProductImage) =>
  has(key, imageMap) ? of(`${prop<ImageMapKeys, IProductImage>(key, imageMap)} ${width}`) : []
);

const generateSmallString = generateString('small', '300w');
const generateMediumString = generateString('medium', '600w');

// eslint-disable-next-line import/prefer-default-export
export const generateDataSrc: GenerateDataSrc = o(
  join(', '),
  converge(concat, [generateSmallString, generateMediumString])
);
