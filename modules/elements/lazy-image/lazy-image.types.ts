import { Images } from '@ilovemochi/enums';
import { IProductImage } from '@ilovemochi/types';
import { ImgHTMLAttributes } from 'react';

export type ImageMapKeys = Images.Small | Images.Medium;

export type ImageWidth = '300w' | '600w';

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  imageMap: IProductImage;
}
