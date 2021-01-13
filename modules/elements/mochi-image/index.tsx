import Image from 'next/image';
import { compose, multiply, replace } from 'ramda';
import { FC } from 'react';

import ImageWrapper from './image.styles';
import { MochiImageProps } from './image.types';

export const remToPx = compose(multiply(10), x => +x, replace('rem', ''));

/**
 * @description *** Important for height width always use rem like 10rem ***
 * @param alt {string}
 * @param width {string}
 * @param height {string}
 * @param imageProps {object}
 * @param otherProps {object}
 * @constructor
 */
const MochiImage: FC<MochiImageProps> = ({ alt, width, height, imageProps, ...otherProps }) => (
  <ImageWrapper role="figure" aria-label={alt} height={height} width={width} {...otherProps}>
    <Image {...imageProps} width={remToPx(width)} height={remToPx(height)} alt={alt} />
  </ImageWrapper>
);

export default MochiImage;
