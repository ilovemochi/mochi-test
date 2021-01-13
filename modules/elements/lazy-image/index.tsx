import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { FC, useRef } from 'react';

import { useEffectAfterMount } from '../../hooks';
import { generateDataSrc } from './helper-function';
import { ImageWrapper } from './lazy-image.styles';
import { LazyImageProps } from './lazy-image.types';

const LazyImage: FC<LazyImageProps> = ({ imageMap, ...imageProps }) => {
  const ImageWrapperRef = useRef<HTMLDivElement | null>(null);

  const removeLoading = () => {
    ImageWrapperRef.current?.classList.add('image-loaded');
    ImageWrapperRef.current?.classList.remove('loading');
  };

  useEffectAfterMount(() => {
    ImageWrapperRef.current?.addEventListener('lazyloaded', removeLoading);
    return () => {
      if (ImageWrapperRef.current)
        ImageWrapperRef.current?.removeEventListener('lazyloaded', removeLoading);
    };
  }, [ImageWrapperRef.current]);

  return (
    <ImageWrapper ref={ImageWrapperRef}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={imageMap.medium}
        srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-srcset={generateDataSrc(imageMap)}
        className="lazyload"
        data-sizes="auto"
        {...imageProps}
      />
    </ImageWrapper>
  );
};

export default LazyImage;
